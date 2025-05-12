import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
  standalone: false,
})
export class PasswordPage implements OnInit {
  forgotPasswordForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  resetPassword(): void {
    if (this.forgotPasswordForm.valid) {
      const { password, password2 } = this.forgotPasswordForm.value;

      if (password !== password2) {
        console.warn('Las contraseñas no coinciden');
        return;
      }

      // Aquí llamas a tu servicio o lógica de cambio de contraseña
      console.log('Nueva contraseña:', password); //CAMBIAR ESTO PARA HACERLO FUNCIONAL: this.authService.resetPassword(password);

    } else {
      this.forgotPasswordForm.markAllAsTouched();
      console.warn('Formulario inválido');
    }
  }
}



