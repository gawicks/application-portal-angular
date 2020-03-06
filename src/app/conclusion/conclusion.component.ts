import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationFormService } from '../application-form.service';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss']
})
export class ConclusionComponent implements OnInit {

  public links = [
  { label: 'Contact Us' , link: './contactUs', index: 0 },
  { label: 'Our Projects' , link: './ourProjects', index: 1 },
  { label: 'Our Services' , link: './ourServices', index: 2 }
]
  constructor(private router: Router 
    , private activateRouted: ActivatedRoute
    , private applicationFormService: ApplicationFormService) { }

  ngOnInit() {
    this.router.navigate(['./contactUs'], { relativeTo : this.activateRouted});
  }

  public getApplicantName() {
    const modal = this.applicationFormService.getApplicationFormModal();
    return modal ? modal.name : '';
  }

}
