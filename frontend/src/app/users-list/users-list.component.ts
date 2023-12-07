import { Component } from '@angular/core';
import { UsersService } from "./users.service";
import { CommonModule } from "@angular/common";
import { UserDto } from "./user.dto";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [CommonModule],
  providers: [UsersService]
})

export class UsersListComponent {
  users: UserDto[] = [];
  currentPage: number = 1;
  totalPages: number = 6;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    this.usersService.getUsers(this.currentPage)
      .subscribe(data => {
        this.users = data.data;
        this.totalPages = data.totalPages;
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadPersons();
  }

  getPages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}
