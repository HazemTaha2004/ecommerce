import { Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { BlankComponent } from './pages/blank/blank.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductService } from './services/product.service';
import { StoreComponent } from './pages/store/store.component';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'Product', component: ProductService },
  { path: 'store', component: StoreComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'test', component: TestComponent },
];
