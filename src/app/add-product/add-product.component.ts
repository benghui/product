import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router} from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;

  constructor(private  formBuilder: FormBuilder, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      company: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.addForm.valid) {
      this.productService.addProduct(this.addForm.value)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['']);
        });
    }
  }

  get f() { return this.addForm.controls; }
}
