import {Component, OnInit} from '@angular/core';
import {SecureHttpClientService} from '../../../shared/secure-http-client.service';
import {EnumsService} from '../../../shared/enums.service';

@Component({
  selector: 'app-select-enum',
  templateUrl: './select-enum.component.html',
  styleUrls: ['./select-enum.component.css']
})
export class SelectEnumComponent implements OnInit {

  cardTypes = [];

  constructor(private enumsService: EnumsService) {
  }

  ngOnInit(): void {
    this.getEnums();
  }

  getEnums() {
    this.enumsService.getCardTypes().subscribe(
      res => this.cardTypes = res
    );
  }

}
