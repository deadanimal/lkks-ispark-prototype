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
  selector: 'app-kakitangan-profil',
  templateUrl: './kakitangan-profil.component.html',
  styleUrls: ['./kakitangan-profil.component.scss']
})
export class KakitanganProfilComponent implements OnInit {

  // Table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      id: 1,
      employeeid: "YP-822-sjk",
      employeename: "Bertina Eddolls",
      employeenric: "431123-83-8057",
      employeephonenum: "(486) 9655301",
      employeeemail: "beddolls0@barnesandnoble.com",
      employeestartdate: "05/03/2020",
      employeesalary: 8193.07,
      employeestatus: "Berhenti Kerja",
    },
    {
      id: 2,
      employeeid: "YP-586-zah",
      employeename: "Minni Hallad",
      employeenric: "218233-71-2973",
      employeephonenum: "(442) 2785401",
      employeeemail: "mhallad1@biglobe.ne.jp",
      employeestartdate: "04/19/2020",
      employeesalary: 6052.51,
      employeestatus: "Aktif",
    },
    {
      id: 3,
      employeeid: "YP-727-pgp",
      employeename: "Shell Jefferson",
      employeenric: "905886-65-5527",
      employeephonenum: "(974) 3048205",
      employeeemail: "sjefferson2@goodreads.com",
      employeestartdate: "07/26/2019",
      employeesalary: 1384.54,
      employeestatus: "Pencen",
    },
    {
      id: 4,
      employeeid: "YP-726-eck",
      employeename: "Gaultiero Capaldi",
      employeenric: "164944-52-8042",
      employeephonenum: "(870) 2004575",
      employeeemail: "gcapaldi3@mozilla.org",
      employeestartdate: "04/17/2020",
      employeesalary: 7767.73,
      employeestatus: "Pencen",
    },
    {
      id: 5,
      employeeid: "YP-694-iqu",
      employeename: "Wade Suggey",
      employeenric: "019523-81-5798",
      employeephonenum: "(862) 7995521",
      employeeemail: "wsuggey4@nih.gov",
      employeestartdate: "06/02/2020",
      employeesalary: 9021.85,
      employeestatus: "Aktif",
    },
    {
      id: 6,
      employeeid: "YP-238-jfl",
      employeename: "Riordan Winslett",
      employeenric: "150001-60-2551",
      employeephonenum: "(685) 3682993",
      employeeemail: "rwinslett5@infoseek.co.jp",
      employeestartdate: "05/16/2020",
      employeesalary: 2016.66,
      employeestatus: "Berhenti Kerja",
    },
    {
      id: 7,
      employeeid: "YP-153-voh",
      employeename: "Fiorenze Bowdery",
      employeenric: "600019-71-0448",
      employeephonenum: "(196) 7333253",
      employeeemail: "fbowdery6@sun.com",
      employeestartdate: "04/24/2020",
      employeesalary: 7048.29,
      employeestatus: "Aktif",
    },
    {
      id: 8,
      employeeid: "YP-020-zwe",
      employeename: "Terrie Prowting",
      employeenric: "254719-20-3408",
      employeephonenum: "(142) 6211493",
      employeeemail: "tprowting7@dyndns.org",
      employeestartdate: "01/30/2020",
      employeesalary: 6084.65,
      employeestatus: "Pencen",
    },
    {
      id: 9,
      employeeid: "YP-092-pmj",
      employeename: "Paquito Willisch",
      employeenric: "756132-39-0010",
      employeephonenum: "(701) 8588145",
      employeeemail: "pwillisch8@ucla.edu",
      employeestartdate: "09/14/2019",
      employeesalary: 729.91,
      employeestatus: "Berhenti Kerja",
    },
    {
      id: 10,
      employeeid: "YP-263-nfs",
      employeename: "Dacie Kobierski",
      employeenric: "759113-11-1426",
      employeephonenum: "(443) 6492923",
      employeeemail: "dkobierski9@disqus.com",
      employeestartdate: "09/09/2019",
      employeesalary: 803.38,
      employeestatus: "Berhenti Kerja",
    },
    {
      id: 11,
      employeeid: "YP-990-slk",
      employeename: "Ardyce Juett",
      employeenric: "924999-97-1761",
      employeephonenum: "(852) 1067953",
      employeeemail: "ajuetta@noaa.gov",
      employeestartdate: "10/21/2019",
      employeesalary: 4029.93,
      employeestatus: "Pencen",
    },
    {
      id: 12,
      employeeid: "YP-557-ncj",
      employeename: "Frasier Benediktsson",
      employeenric: "639089-89-2937",
      employeephonenum: "(748) 9574871",
      employeeemail: "fbenediktssonb@t.co",
      employeestartdate: "02/20/2020",
      employeesalary: 4540.92,
      employeestatus: "Berhenti Kerja",
    },
    {
      id: 13,
      employeeid: "YP-487-fwt",
      employeename: "Sallie Lapley",
      employeenric: "315239-61-6497",
      employeephonenum: "(773) 7940092",
      employeeemail: "slapleyc@senate.gov",
      employeestartdate: "12/22/2019",
      employeesalary: 6005.77,
      employeestatus: "Aktif",
    },
    {
      id: 14,
      employeeid: "YP-761-akz",
      employeename: "Armstrong Gosneye",
      employeenric: "809956-36-7648",
      employeephonenum: "(832) 2553074",
      employeeemail: "agosneyed@chron.com",
      employeestartdate: "08/18/2019",
      employeesalary: 5644.85,
      employeestatus: "Berhenti Kerja",
    },
    {
      id: 15,
      employeeid: "YP-020-vlq",
      employeename: "Chevalier Pilbury",
      employeenric: "137007-89-5927",
      employeephonenum: "(126) 3784201",
      employeeemail: "cpilburye@dmoz.org",
      employeestartdate: "09/28/2019",
      employeesalary: 1403.16,
      employeestatus: "Aktif",
    },
    {
      id: 16,
      employeeid: "YP-711-olb",
      employeename: "Glenn Marriott",
      employeenric: "838772-77-5149",
      employeephonenum: "(751) 8526400",
      employeeemail: "gmarriottf@engadget.com",
      employeestartdate: "09/05/2019",
      employeesalary: 5211.63,
      employeestatus: "Berhenti Kerja",
    },
    {
      id: 17,
      employeeid: "YP-696-vqo",
      employeename: "Peterus Lorie",
      employeenric: "002813-92-6188",
      employeephonenum: "(186) 3956687",
      employeeemail: "plorieg@blogspot.com",
      employeestartdate: "02/15/2020",
      employeesalary: 1201.17,
      employeestatus: "Pencen",
    },
    {
      id: 18,
      employeeid: "YP-220-zid",
      employeename: "Jammie L' Anglois",
      employeenric: "973718-02-1525",
      employeephonenum: "(274) 7508482",
      employeeemail: "jlh@e-recht24.de",
      employeestartdate: "02/24/2020",
      employeesalary: 6096.99,
      employeestatus: "Berhenti Kerja",
    },
    {
      id: 19,
      employeeid: "YP-757-hst",
      employeename: "Pearl Veldman",
      employeenric: "993022-71-6919",
      employeephonenum: "(896) 1797410",
      employeeemail: "pveldmani@t-online.de",
      employeestartdate: "11/05/2019",
      employeesalary: 4391.11,
      employeestatus: "Berhenti Kerja",
    },
    {
      id: 20,
      employeeid: "YP-095-knk",
      employeename: "Selle Thurston",
      employeenric: "648092-81-3164",
      employeephonenum: "(617) 9399500",
      employeeemail: "sthurstonj@nasa.gov",
      employeestartdate: "02/07/2020",
      employeesalary: 5096.5,
      employeestatus: "Berhenti Kerja",
    },
    {
      id: 21,
      employeeid: "YP-424-dzh",
      employeename: "Roseanna Bellringer",
      employeenric: "619871-72-4270",
      employeephonenum: "(866) 8875637",
      employeeemail: "rbellringerk@blogspot.com",
      employeestartdate: "01/10/2020",
      employeesalary: 4568.23,
      employeestatus: "Berhenti Kerja",
    },
    {
      id: 22,
      employeeid: "YP-797-xje",
      employeename: "Lea Giron",
      employeenric: "635722-51-0560",
      employeephonenum: "(501) 8840049",
      employeeemail: "lgironl@scientificamerican.com",
      employeestartdate: "12/06/2019",
      employeesalary: 3916.35,
      employeestatus: "Berhenti Kerja",
    },
    {
      id: 23,
      employeeid: "YP-792-hbj",
      employeename: "Henrieta Baglin",
      employeenric: "047547-44-0998",
      employeephonenum: "(232) 5582511",
      employeeemail: "hbaglinm@nationalgeographic.com",
      employeestartdate: "02/06/2020",
      employeesalary: 2689.9,
      employeestatus: "Aktif",
    },
    {
      id: 24,
      employeeid: "YP-116-fvt",
      employeename: "Gaelan Chetham",
      employeenric: "941839-82-4748",
      employeephonenum: "(432) 5173213",
      employeeemail: "gchethamn@g.co",
      employeestartdate: "06/15/2020",
      employeesalary: 7627.66,
      employeestatus: "Berhenti Kerja",
    },
    {
      id: 25,
      employeeid: "YP-233-krm",
      employeename: "Yule Gostall",
      employeenric: "675148-56-5505",
      employeephonenum: "(438) 9063020",
      employeeemail: "ygostallo@homestead.com",
      employeestartdate: "05/15/2020",
      employeesalary: 3836.72,
      employeestatus: "Aktif",
    },
    {
      id: 26,
      employeeid: "YP-510-ynb",
      employeename: "Ripley Bayne",
      employeenric: "351287-27-4921",
      employeephonenum: "(644) 2116363",
      employeeemail: "rbaynep@pinterest.com",
      employeestartdate: "02/18/2020",
      employeesalary: 6186.23,
      employeestatus: "Pencen",
    },
    {
      id: 27,
      employeeid: "YP-287-kci",
      employeename: "Theadora Gubbins",
      employeenric: "659002-41-2599",
      employeephonenum: "(952) 6236914",
      employeeemail: "tgubbinsq@wordpress.com",
      employeestartdate: "08/31/2019",
      employeesalary: 4447.66,
      employeestatus: "Aktif",
    },
    {
      id: 28,
      employeeid: "YP-956-bgt",
      employeename: "Lanny Flewin",
      employeenric: "470621-47-4541",
      employeephonenum: "(951) 1474784",
      employeeemail: "lflewinr@gizmodo.com",
      employeestartdate: "03/29/2020",
      employeesalary: 3083.25,
      employeestatus: "Berhenti Kerja",
    },
    {
      id: 29,
      employeeid: "YP-166-tuj",
      employeename: "Erin Aubri",
      employeenric: "008040-43-7561",
      employeephonenum: "(989) 7042951",
      employeeemail: "eaubris@ucoz.com",
      employeestartdate: "07/06/2019",
      employeesalary: 4146.71,
      employeestatus: "Berhenti Kerja",
    },
    {
      id: 30,
      employeeid: "YP-712-ona",
      employeename: "Dorthea MacShirrie",
      employeenric: "067487-93-3958",
      employeephonenum: "(113) 9208311",
      employeeemail: "dmacshirriet@ibm.com",
      employeestartdate: "01/22/2020",
      employeesalary: 9451.66,
      employeestatus: "Aktif",
    },
  ];
  SelectionType = SelectionType;

  modalPekerja: BsModalRef;
  modalTitle: string;

  modalKeluarga: BsModalRef;
  modalTitleK: string;

  familyRows: any = [
    {
      id: 1,
      familyname: "Gay Decker",
      familyrelationship: "Ayah",
      familyage: 11,
      familyoccupation: "VP Marketing",
      familyphonenum: "606-706-4513",
    },
    {
      id: 2,
      familyname: "Wallache Blackburn",
      familyrelationship: "Ibu",
      familyage: 41,
      familyoccupation: "Human Resources Manager",
      familyphonenum: "155-404-8443",
    },
    {
      id: 3,
      familyname: "Luce Devine",
      familyrelationship: "Abang",
      familyage: 4,
      familyoccupation: "Legal Assistant",
      familyphonenum: "685-471-6176",
    },
    {
      id: 4,
      familyname: "Kevyn Morhall",
      familyrelationship: "Kakak",
      familyage: 5,
      familyoccupation: "Environmental Tech",
      familyphonenum: "820-561-6501",
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

  ngOnInit() {
  }

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
    this.selected.push(selected);
  }

  onActivate(event) {
    this.activeRow = event.row;
  }

  statusBadge(status: string) {
    if (status == "Aktif") return "badge badge-success";
    if (status == "Berhenti Kerja") return "badge badge-danger";
    if (status == "Pencen") return "badge badge-warning";
  }

  openModal(template: TemplateRef<any>, title: string) {
    this.modalTitle = title;
    let options = {
      backdrop: true,
      class: "modal-lg",
      ignoreBackdropClick: false,
    };
    this.modalPekerja = this.modalService.show(template, options);
  }

  closeModal() {
    this.modalPekerja.hide();
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
        if (result.value) this.closeModal();
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

  openModalK(template: TemplateRef<any>, title: string) {
    this.modalTitleK = title;
    let options = {
      backdrop: true,
      class: "modal-lg",
      ignoreBackdropClick: false,
    };
    this.modalKeluarga = this.modalService.show(template, options);
  }

  closeModalK() {
    this.modalKeluarga.hide();
  }

  clickSaveK() {
    swal
      .fire({
        title: "Berjaya",
        text: "Data anda berjaya disimpan",
        type: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
      })
      .then((result) => {
        if (result.value) this.closeModalK();
      });
  }

}
