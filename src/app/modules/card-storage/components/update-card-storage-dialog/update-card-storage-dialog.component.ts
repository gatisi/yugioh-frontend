import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CardStorage} from '../../entities/card-storage';
import {FormControl, FormGroup} from '@angular/forms';
import {CardStorageService} from "../../service/card-storage.service";

@Component({
  selector: 'app-update-card-storage-dialog',
  templateUrl: './update-card-storage-dialog.component.html',
  styleUrls: ['./update-card-storage-dialog.component.css']
})
export class UpdateCardStorageDialogComponent implements OnInit {

  updateCardStorageForm = new FormGroup({
    storageName: new FormControl(''),
  });
  buttonDisabled: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<UpdateCardStorageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public cardStorage: CardStorage,
    private cardStorageService: CardStorageService
  ) {
  }

  ngOnInit(): void {
  }

  saveCardStorage() {
    this.buttonDisabled = true;
    this.cardStorageService.updateCardStorage(this.cardStorage).subscribe(
      res => this.dialogRef.close()
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}
