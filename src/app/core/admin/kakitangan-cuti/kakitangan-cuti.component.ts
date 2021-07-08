import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: 'app-kakitangan-cuti',
  templateUrl: './kakitangan-cuti.component.html',
  styleUrls: ['./kakitangan-cuti.component.scss']
})
export class KakitanganCutiComponent implements OnInit {

  // Table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      id: 1,
      holidayid: "H677",
      holidaytitle: "Harry Potter and the Chamber of Secrets",
      holidaytype: "Cuti Perayaan",
      holidayrepeat: "Tahunan",
      holidaydetail:
        "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    },
    {
      id: 2,
      holidayid: "H908",
      holidaytitle: "Please Give",
      holidaytype: "Cuti Peristiwa",
      holidayrepeat: "Mingguan",
      holidaydetail:
        "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    },
    {
      id: 3,
      holidayid: "H875",
      holidaytitle: "Love Serenade",
      holidaytype: "Cuti Umum",
      holidayrepeat: "Mingguan",
      holidaydetail:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    },
    {
      id: 4,
      holidayid: "H514",
      holidaytitle: "Great Guy",
      holidaytype: "Cuti Perayaan",
      holidayrepeat: "Tiada",
      holidaydetail:
        "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    },
    {
      id: 5,
      holidayid: "H070",
      holidaytitle: "Wallace & Gromit: A Close Shave",
      holidaytype: "Cuti Umum",
      holidayrepeat: "Tiada",
      holidaydetail:
        "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    },
    {
      id: 6,
      holidayid: "H453",
      holidaytitle: "Dolly Sisters, The",
      holidaytype: "Cuti Umum",
      holidayrepeat: "Tiada",
      holidaydetail:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
      id: 7,
      holidayid: "H655",
      holidaytitle: "King Lines",
      holidaytype: "Cuti Umum",
      holidayrepeat: "Tiada",
      holidaydetail:
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    },
    {
      id: 8,
      holidayid: "H515",
      holidaytitle: "Horton Hears a Who!",
      holidaytype: "Cuti Peristiwa",
      holidayrepeat: "Tahunan",
      holidaydetail:
        "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    },
    {
      id: 9,
      holidayid: "H832",
      holidaytitle: "Hippie Masala - Forever in India",
      holidaytype: "Cuti Perayaan",
      holidayrepeat: "Mingguan",
      holidaydetail:
        "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    },
    {
      id: 10,
      holidayid: "H559",
      holidaytitle: "Vibes",
      holidaytype: "Cuti Perayaan",
      holidayrepeat: "Tiada",
      holidaydetail:
        "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    },
  ];
  SelectionType = SelectionType;

  modalCuti: BsModalRef;
  modalTitle: string;

  modalPermohonan: BsModalRef;
  modalTitleP: string;

  applicationLeaves: any = [
    {
      id: 1,
      holidayid: "H2020-64666",
      holidayemployeename: "Elspeth Mountney",
      holidaytype: "Cuti Sakit",
      holidayday: 2,
    },
    {
      id: 2,
      holidayid: "H2020-17776",
      holidayemployeename: "Giles Macartney",
      holidaytype: "Cuti Tahunan",
      holidayday: 3,
    },
    {
      id: 3,
      holidayid: "H2020-66863",
      holidayemployeename: "Killian Corrin",
      holidaytype: "Cuti Sakit",
      holidayday: 5,
    },
    {
      id: 4,
      holidayid: "H2020-19136",
      holidayemployeename: "Beltran Gaisford",
      holidaytype: "Cuti Ganti",
      holidayday: 5,
    },
    {
      id: 5,
      holidayid: "H2020-68290",
      holidayemployeename: "Emmalee Brisley",
      holidaytype: "Cuti Kecemasan",
      holidayday: 3,
    },
  ];

  constructor(private modalService: BsModalService) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  ngOnInit() {}

  entriesChange($event) {
    this.entries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toString().toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    this.activeRow = event.row;
  }

  statusBadge(status: string) {
    if (status == "Aktif") return "badge badge-success";
    if (status == "Tidak Aktif") return "badge badge-danger";
  }

  openModal(template: TemplateRef<any>, title: string) {
    this.modalTitle = title;
    let options = {
      backdrop: true,
      class: "modal-lg",
      ignoreBackdropClick: false,
    };
    this.modalCuti = this.modalService.show(template, options);
  }

  closeModal() {
    this.modalCuti.hide();
  }

  clickReset() {
    this.temp = this.rows;
  }

  clickSave() {
    swal
      .fire({
        title: "Berjaya",
        text: "Data anda berjaya disimpan",
        type: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
      })
      .then((result) => {
        if (result.value) this.modalCuti.hide();
      });
  }

  clickDelete() {
    swal
      .fire({
        title: "Hapus data",
        text: "Adakah anda ingin menghapus data ini?",
        type: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-danger",
        confirmButtonText: "Ya",
        cancelButtonClass: "btn btn-secondary",
        cancelButtonText: "Tidak",
      })
      .then((result) => {
        if (result.value) {
          // Show confirmation
          swal.fire({
            title: "Proses hapus data berjaya!",
            text: "Data anda berjaya dihapus.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-primary",
          });
        }
      });
  }

  openModalP(template: TemplateRef<any>, title: string) {
    this.modalTitleP = title;
    let options = {
      backdrop: true,
      class: "modal-lg",
      ignoreBackdropClick: false,
    };
    this.modalPermohonan = this.modalService.show(template, options);
  }

  closeModalP() {
    this.modalPermohonan.hide();
  }

  clickSaveP() {
    swal
      .fire({
        title: "Berjaya",
        text: "Data anda berjaya disimpan",
        type: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
      })
      .then((result) => {
        if (result.value) this.modalPermohonan.hide();
      });
  }

}
