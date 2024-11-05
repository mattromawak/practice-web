// src/app/components/item-create/item-create.component.ts

import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-item-create',
    templateUrl: './item-create.component.html',
    styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent {
    item = { name: '', description: '' };

    constructor(private itemService: ItemService, private router: Router) {}

    saveItem(): void {
        this.itemService.createItem(this.item).subscribe(() => {
            this.router.navigate(['/items']);
        });
    }
}
