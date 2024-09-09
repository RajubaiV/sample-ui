import { Component, OnInit } from '@angular/core';
import { IceGateService } from '../../services/ice-gate.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { IcegateFormComponent } from '../icegate-form/icegate-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icegatelist',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatTooltipModule
  ],
  templateUrl: './icegatelist.component.html',
  styleUrl: './icegatelist.component.css',
  providers: [IceGateService]
})
export class IcegatelistComponent implements OnInit {

	displayedColumns: string[] = ['requestorId', 'modeOfTransport', 'vesselCode', 'portCode', 'status', 'actions'];
	dataSource: any;

	constructor(private dialog: MatDialog,
		private service: IceGateService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.load();
	}

	load() {
		this.service.list().subscribe(data => {
			this.dataSource = data;
		});
	}

	goToDashboard(){
		this.router.navigateByUrl('/dashboard');
	}

	addData() {
		var dialogRef = this.dialog.open(IcegateFormComponent, {
			width: '800px',
			height: '500px'
		});
		dialogRef.afterClosed().subscribe(result => {
			this.load();
		});
	}

	edit(element: any): void {
		var id = element.integrationRequestId;
		const dialogRef = this.dialog.open(IcegateFormComponent, {
			data: id,
			width: '800px',
			height: '500px',
		});
		dialogRef.afterClosed().subscribe((result) => {
			this.load();
		});
	}

	delete(element: any) {
		this.service.delete(element.integrationRequestId).subscribe(data => {
			this.load();
		});
	}

	getStatusClass(stateId: string): string {
		switch (stateId) {
			case 'Created':
				return 'status-created';
			case 'Modified':
				return 'status-modified';
			case 'Submitted':
				return 'status-submitted';
			case 'Acknowledged':
				return 'status-acknowledged';
			default:
				return 'status-default';
		}
	}

}
