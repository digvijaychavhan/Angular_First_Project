import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog'; 




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
user={username:'',password:'',remember:false}
 

  onSubmit(){
    console.log('User :',this.user);
    this.dislogRef.close();
  }
  constructor(public dislogRef : MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

}
