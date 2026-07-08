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
    {path:"checkout", component:CheckoutComponent},
    {path:"", component:BlankComponent},
    {path:"home", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    // NOTE: ProductService is an Injectable service, not an Angular component. 
    // Mapping it directly in the routing config causes Angular build/runtime errors.
    // TODO: Create a ProductDetailComponent to manage this path and handle dynamic product details.
    // {path:"Product", component:ProductService},
    {path:"store", component:StoreComponent},
    {path:"categories", component:CategoriesComponent},
    {path:"test", component:TestComponent},

];
