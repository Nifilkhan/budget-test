
import { Component, computed, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

type FormField =
  | 'userName'
  | 'phoneNumber'
  | 'transactionCategory'
  | 'accountType'
  | 'balanceAmount';

@Component({
  selector: 'app-user-form',
  imports: [RouterLink],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
  userName = signal('');
  phoneNumber = signal('');
  transactionCategory = signal('');
  accountType = signal('');
  balanceAmount = signal('');

  submitted = signal(false);
  touchedFields = signal<Set<FormField>>(new Set());
  saved = signal(false);

  isValid = computed(
    () =>
      this.userName().trim().length > 0 &&
      /^\+?[0-9\s()-]{7,20}$/.test(this.phoneNumber().trim()) &&
      this.transactionCategory().length > 0 &&
      this.accountType().length > 0 &&
      Number(this.balanceAmount()) >= 0 &&
      this.balanceAmount().trim().length > 0,
  );

  constructor(private router: Router) {}

  updateField(field: FormField, value: string): void {
    this[field].set(value);
    this.saved.set(false);
  }

  markTouched(field: FormField): void {
    this.touchedFields.update((fields) => new Set(fields).add(field));
  }

  hasError(field: FormField): boolean {
    if (!this.submitted() && !this.touchedFields().has(field)) {
      return false;
    }

    switch (field) {
      case 'userName':
        return this.userName().trim().length === 0;
      case 'phoneNumber':
        return !/^\+?[0-9\s()-]{7,20}$/.test(this.phoneNumber().trim());
      case 'transactionCategory':
        return this.transactionCategory().length === 0;
      case 'accountType':
        return this.accountType().length === 0;
      case 'balanceAmount':
        return this.balanceAmount().trim().length === 0 || Number(this.balanceAmount()) < 0;
    }
  }

  submit(): void {
    this.submitted.set(true);

    if (!this.isValid()) {
      this.touchedFields.set(
        new Set<FormField>([
          'userName',
          'phoneNumber',
          'transactionCategory',
          'accountType',
          'balanceAmount',
        ]),
      );
      return;
    }

    this.saved.set(true);
  }

  cancel(): void {
    this.router.navigate(['/dashboard']);
  }
}
