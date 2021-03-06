import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { Assignment } from './assignment.model';
import { LoggingService } from './logging.service';
import { assignmentsGeneres } from './data';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[];

  constructor(private loggingService:LoggingService, private http:HttpClient) { }

   uri = "http://localhost:8010/api/assignments";
   uriRendu = "http://localhost:8010/api/assignmentsRendu";
  uriNonRendu = "http://localhost:8010/api/assignmentsNonRendu";


  getAssignments():Observable<Assignment[]> {
    //return of(this.assignments);
    return this.http.get<Assignment[]>(this.uri);
  }

  //get all paginate
  getAssignmentsPagine(page:number, limit:number):Observable<any> {
    return this.http.get<Assignment[]>(this.uri+"?page="+page + "&limit="+limit);
  }

  //get all paginate rendu
  getAssignmentsRenduPagine(page:number, limit:number):Observable<any> {
    return this.http.get<Assignment[]>(this.uriRendu+"?page="+page + "&limit="+limit);
  }

  //get all paginate non rendu
  getAssignmentsNonRenduPagine(page:number, limit:number):Observable<any> {
    return this.http.get<Assignment[]>(this.uriNonRendu+"?page="+page + "&limit="+limit);
  }
  // Pour votre culture, on peut aussi utiliser httpClient avec une promesse
  // et then, async, await etc. Mais ce n'est pas la norme chez les developpeurs
  // Angular
  getAssignmentsAsPromise():Promise<Assignment[]> {
  
    //return of(this.assignments);
    return this.http.get<Assignment[]>(this.uri).toPromise();
  }

  getAssignment(id:number):Observable<Assignment> {
    //let assignementCherche = this.assignments.find(a => a.id === id);

    //return of(assignementCherche);

    return this.http.get<Assignment>(this.uri + "/" + id);
  }

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
    

      return of(result as T);
    };
  }

  generateId():number {
    return Math.round(Math.random()*100000);
  }

  addAssignment(assignment:Assignment):Observable<any> {
    assignment.id = this.generateId();
    //this.loggingService.log(assignment.nom, " a ??t?? ajout??");

    return this.http.post(this.uri, assignment);
  }

  updateAssignment(assignment:Assignment):Observable<any> {
    // besoin de ne rien faire puisque l'assignment pass?? en param??tre
    // est d??j?? un ??l??ment du tableau

    //let index = this.assignments.indexOf(assignment);

    //console.log("updateAssignment l'assignment pass?? en param est ?? la position " + index + " du tableau");
    this.loggingService.log(assignment.nom, " a ??t?? modifi??");

    return this.http.put(this.uri, assignment);
  }

  deleteAssignment(assignment:Assignment):Observable<any> {
   
    this.loggingService.log(assignment.nom, " a ??t?? supprim??");

    return this.http.delete(this.uri + "/" + assignment._id);

  }

  peuplerBD() {
    assignmentsGeneres.forEach(a => {
      let nouvelAssignment = new Assignment();
      nouvelAssignment.nom = a.nom;
      nouvelAssignment.id = a.id;
      nouvelAssignment.dateDeRendu = new Date(a.dateDeRendu);
      nouvelAssignment.rendu = a.rendu;

      this.addAssignment(nouvelAssignment)
      .subscribe(reponse => {
        console.log(reponse.message);
      })
    })
  }

  // autre version qui permet de r??cup??rer un subscribe une fois que tous les inserts
  // ont ??t?? effectu??s
  peuplerBDAvecForkJoin(): Observable<any> {
    const appelsVersAddAssignment = [];

    assignmentsGeneres.forEach((a) => {
      const nouvelAssignment = new Assignment();

      nouvelAssignment.id = a.id;
      nouvelAssignment.nom = a.nom;
      nouvelAssignment.dateDeRendu = new Date(a.dateDeRendu);
      nouvelAssignment.rendu = a.rendu;

      appelsVersAddAssignment.push(this.addAssignment(nouvelAssignment));
    });
    return forkJoin(appelsVersAddAssignment); // renvoie un seul Observable pour dire que c'est fini
  }
}
