<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TrainSchedule;
class TrainScheduleController extends Controller
{
    //method to return all the trainSchedule in the database
    public function index(){
        $trainSchedules = TrainSchedule::all();  
        return response()->json($trainSchedules);
    }

    //method to create trainSchedule
    public function store(Request $request){
        $trainSchedule = TrainSchedule::create([
            'route'=> $request->route,
            'departure' => $request ->departure,
            'arrivalTime'=> $request ->arrivalTime,
            'ticketPrice'=> $request ->ticketPrice
        ]);
        return response() -> json($trainSchedule);
    }
    //method to edit the trainSchedule by id
    public function edit($id){
        $trainSchedule = TrainSchedule::find($id);
        return response() -> json($trainSchedule);
    }
    //method to update 
    public function update(Request $request, $id){
        $trainSchedule = TrainSchedule::find($id) ->update([
            'route' => $request ->route,
            'departure' => $request ->departure,
            'arrivalTime' => $request ->arrivalTime,
            'ticketPrice' => $request -> ticketPrice
        ]);
        return response() -> json($trainSchedule);
    }
    // method to delete the train schedule
    public function delete($id){
        $trainSchedule = TrainSchedule::find($id) ->delete();
        return response() -> json($trainSchedule);
    }
}
