import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import swal from 'sweetalert2';

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}

@Component({
  selector: 'app-ekonomi',
  templateUrl: './ekonomi.component.html',
  styleUrls: ['./ekonomi.component.scss']
})
export class EkonomiComponent implements OnInit {

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      idusahawan: "218724",
      nama: "Ahmad Zaki",
      syarikat: "Zack Industries",
      tarikh: "3/7/2021",
      alamat:"Bandar Baru Gua Musang, 18300 Gua Musang, Kelantan Darul Naim",
      status:"1",
    },
    {
      idusahawan: "829842",
      nama: "Ainul Jamilah",
      syarikat: "AJ Landscape Development",
      tarikh: "12/1/2021",
      alamat:"Bandar Baru Gua Musang, 18300 Gua Musang, Kelantan Darul Naim, Malaysia.",
      status:"1",
    },
    {
      idusahawan: "449022",
      nama: "Lim Chong Eng",
      syarikat: "LCE Cement",
      tarikh: "26/4/2021",
      alamat:"Bandar Baru Gua Musang, 18300 Gua Musang, Kelantan Darul Naim, Malaysia.",
      status:"2",
    },
    {
      idusahawan: "980340",
      nama: "Eren Yeager",
      syarikat: "Architecture Officer Team (AOT)",
      tarikh: "4/6/2021",
      alamat:"Bandar Baru Gua Musang, 18300 Gua Musang, Kelantan Darul Naim, Malaysia.",
      status:"2",
    },
    {
      idusahawan: "121993",
      nama: "Sarah Alia Samad",
      syarikat: "Sarah A. Consultant",
      tarikh: "1/3/2021",
      alamat:"Bandar Baru Gua Musang, 18300 Gua Musang, Kelantan Darul Naim, Malaysia.",
      status:"1",
    },
  ];
  SelectionType = SelectionType;

  constructor(private modalService: BsModalService,) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };
    });
  }
  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  ngOnInit() {
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, {class: "modal-lg"});
  }

  closeModal() {
    this.modal.hide()
  }

  confirm() {
    swal.fire({
      title: "Pengesahan",
      text: "Anda pasti untuk manambah data?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Sah",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Batal"
    }).then((result) => {
      if (result.value) {
        this.register()
      }
    })
  }

  register() {
    swal.fire({
      title: "Berjaya",
      text: "Data telah disimpan!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Tutup"
    }).then((result) => {
      if (result.value) {
        this.modal.hide()
      }
    })
  }

}
