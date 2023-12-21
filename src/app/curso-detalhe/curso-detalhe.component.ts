import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-curso-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss'
})
export class CursoDetalheComponent implements OnInit{

  id: string = '';

  constructor(private route: ActivatedRoute){
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit(): void {

  }

}
