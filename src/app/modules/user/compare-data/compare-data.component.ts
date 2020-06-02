import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { BusinessService } from 'src/app/services/business.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-compare-data',
  templateUrl: './compare-data.component.html',
  styleUrls: ['./compare-data.component.scss']
})
export class CompareDataComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings={} as IDropdownSettings;
  filterList = [];
  displayWarning = false;
  option: any;
  startDate: string;
  endDate: string;
  conpareDateList = [];
  
  constructor(private businessService: BusinessService) { }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Company' },
      { item_id: 2, item_text: 'Sector' }
    ];
    this.selectedItems = [
      { item_id: 1, item_text: 'Company' }
    ];
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      allowSearchFilter: false
    };
    this.filterList.push({
      dropdownList: this.dropdownList,
      selectedItems: this.selectedItems,
      companyName: ''
    })
  }

  onItemSelect(items: any) {

  }

  handleAdd() {
    if (this.filterList.length >= 2) {
      this.displayWarning = true;
      return;
    }
    this.filterList.push({
      dropdownList: this.dropdownList,
      selectedItems: this.selectedItems,
      companyName: ''
    })
  }

  handleGenerateChart() {
    console.log(this.filterList);
    let apiArray = [];
    this.filterList.forEach(
      item => {
        if (!item.companyName) {
          console.log('companyName error');
        } else {
          apiArray.push(this.businessService.companyStockPrice(item.companyName, this.startDate + ' 00:00:00', this.endDate + ' 23:59:59'));
        }
      }
    )
    forkJoin(...apiArray).subscribe(
      data => {
        this.conpareDateList = data;
        this.generateCharts(data);
      }, err => {
        console.log('API error');
      }
    );
    
  }

  handleSearch(name) {

  }

  private generateCharts(compareDataSet) {
    let nameList = [];
    let timeInterval = [];
    let seriesList = [];
    compareDataSet.forEach(element => {
      nameList.push(element.companyName);
      timeInterval.push(element.time);
      seriesList.push(          
          {
          name: element.companyName,
          type: 'bar',
          data: element.price,
          markPoint: {
              data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
              ]
          },
          markLine: {
              data: [
                  {type: 'average', name: '平均值'}
              ]
          }
      });
    });
    this.option = {
      title: {
          text: 'Stock Price',
          subtext: ''
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: ['Alibaba', 'Goolge']
      },
      calculable: true,
      xAxis: [
          {
              type: 'category',
              data: timeInterval[0]
          }
      ],
      yAxis: [
          {
              type: 'value'
          }
      ],
      series: seriesList
  };
  
  }

}
