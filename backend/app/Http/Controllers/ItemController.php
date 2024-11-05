<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    // Fetch all items
    public function index()
    {
        return Item::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    // Create a new item
    public function store(Request $request)
    {
        $item = Item::create($request->all());
        return response()->json($item, 201);
    }


    // Fetch a single item
    public function show($id)
    {
        return Item::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $item = Item::findOrFail($id);
        return response()->json($item);
    }

    // Update an item
    public function update(Request $request, $id)
    {
        $item = Item::find($id);
        $item->update($request->all());
        return response()->json($item, 200);
    }

    // Delete an item
    public function destroy($id)
    {
        Item::destroy($id);
        return response()->json(null, 204);
    }
}
