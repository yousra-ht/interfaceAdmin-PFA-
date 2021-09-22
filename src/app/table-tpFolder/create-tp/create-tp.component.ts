import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TpService } from '../tp.service';

@Component({
  selector: 'app-create-tp',
  templateUrl: './create-tp.component.html',
  styleUrls: ['./create-tp.component.css']
})
export class CreateTpComponent implements OnInit {

  constructor(private tpservice: TpService, private router: Router) { }
  tpForm = new FormGroup({
    nom: new FormControl(''),

  });
  ngOnInit() {
  }

  addTp(e) {
    e.stopPropagation()
    {

      this.tpservice.createTp({
        nom: this.tpForm.get('nom').value,

      }).then(() => {

        console.warn("success");
        this.router.navigate(['/table_TPs']);

      })
    }

  }

}
