// src/app/components/item-list/item-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
    items: any[] = [];

    constructor(private itemService: ItemService, private router: Router) {}

    ngOnInit(): void {
        this.itemService.getItems().subscribe(data => {
            this.items = data;
        });
    }

    deleteItem(id: number): void {
        this.itemService.deleteItem(id).subscribe(() => {
            this.items = this.items.filter(item => item.id !== id);
        });
    }

    editItem(id: number): void {
        this.router.navigate(['/edit-item', id]);
    }
}
