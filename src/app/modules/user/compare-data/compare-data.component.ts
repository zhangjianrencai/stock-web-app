import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { BusinessService } from 'src/app/services/business.service';

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
    this.generateCharts('');
  }

  handleSearch() {

  }

  private generateCharts(data) {
    this.option = {
      title: {
          text: 'Stock Price',
          subtext: 'fake'
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
              data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          }
      ],
      yAxis: [
          {
              type: 'value'
          }
      ],
      series: [
          {
              name: 'Alibaba',
              type: 'bar',
              data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
          },
          {
              name: 'Goolge',
              type: 'bar',
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
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
          }
      ]
  };
  
  }

}
