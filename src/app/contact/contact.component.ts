import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Feedback, ContactType} from '../shared/feedback';
import { visibility, flyInOut, expand } from '../animations/app.animation';
import { FeedbackService } from '../services/feedback.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      visibility(),
      flyInOut(),
      expand()
    ]
})

export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  contactType = ContactType;
  errMess: string;
  visibility = 'hidden';
  confirmTrigger = 'hidden';

  showForm: boolean = true;

  @Input()
  feedback: Feedback;
  feedcopy: Feedback;

  @ViewChild('fform') feedbackFormDirective;

  constructor(private fbservice: FeedbackService,
    private fb: FormBuilder,
    @Inject('BaseURL') public baseURL) {
      this.createForm();
    }

  ngOnInit(): void {

  }

  createForm(): void {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email] ],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };

  /*setTimeout()*/
  TimeoutTask() {
    this.visibility = 'hidden';
    this.feedback = null;
    this.feedcopy = null;

}

  onSubmit(){
    this.showForm = false;
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
    this.fbservice.submitFeedback(this.feedback)
      .subscribe(feedback => {
        this.feedback = feedback;
        this.feedcopy = feedback;
        this.visibility = 'shown';

        setTimeout(() =>{this.visibility = 'hidden'; this.showForm = true}, 5000);
        },
        errmess => {
          this.feedback = null;
          this.errMess = <any>errmess;});
  }

}
