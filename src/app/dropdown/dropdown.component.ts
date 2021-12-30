import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  public priorityBankList = ["CommercialBank", "NTB", "Sampath"]
  public secoundaryBankList = ["CommercialBank", "NTB", "Sampath"]
  public finalBankList = ["CommercialBank", "NTB", "Sampath"]
  public selection = new FormGroup({
    priorityBank: new FormControl(null),
    secoundaryBank: new FormControl(null),
    finalBank: new FormControl(null),
  })
  constructor() { }


  ngOnInit(): void {
  }

  selectPriority(event: Event) {
    let value = this.selection.value.priorityBank
    this.selection.patchValue({ secoundaryBank: null, finalBank: null })
    this.secoundaryBankList = this.priorityBankList.filter(function (item) {
      return item !== value
    })

  }
  selectSecoundary(event: Event) {
    let value = this.selection.value.secoundaryBank
    this.selection.patchValue({ finalBank: null })

    this.finalBankList = this.secoundaryBankList.filter(function (item) {
      return item !== value
    })

  }

}
