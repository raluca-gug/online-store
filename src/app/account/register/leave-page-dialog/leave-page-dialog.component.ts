import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-leave-page-dialog',
  templateUrl: './leave-page-dialog.component.html',
  styleUrls: ['./leave-page-dialog.component.scss']
})
export class LeavePageDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LeavePageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
}
