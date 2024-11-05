// src/app/components/item-edit/item-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component({
    selector: 'app-item-edit',
    templateUrl: './item-edit.component.html',
    styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
    itemId!: number;
    item: any = {
        name: '',
        description: '',
        // Include other fields based on your Item model
    };

    constructor(
        private route: ActivatedRoute,
        private itemService: ItemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        // Get the item ID from the route parameters
        this.itemId = +this.route.snapshot.paramMap.get('id')!;

        // Fetch the item details
        this.itemService.getItem(this.itemId).subscribe(
            (data) => {
                this.item = data;
            },
            (error) => {
                console.error('Error fetching item', error);
            }
        );
    }

    onSubmit() {
        // Update the item
        this.itemService.updateItem(this.itemId, this.item).subscribe(
            () => {
                // Navigate back to the item list after successful update
                this.router.navigate(['/items']);
            },
            (error) => {
                console.error('Error updating item', error);
            }
        );
    }
}
