import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { login } from 'src/app/core/models/login';
// import swal from 'sweetalert';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private toastr: ToastrService) { 
  }

  ngOnInit(): void {
  }


  onSubmit(loginForm: login) {
    debugger;
    if (loginForm.value.username === 'Prashant' && loginForm.value.password === '12345') {
      this.router.navigateByUrl('/dashboard')
    }else{
      //TODO: NEED TO WORK ON SWEETALERT
      // swal("username or password is wrong")
      this.toastr.error('Username or Password in not correct!!','Failed');
    }
  }
}
