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
      
        $trainSchedule = new TrainSchedule([
            'route'=> $request->get('route'),
            'departure' => $request->get('departure'),
            'arrivalTime'=> $request ->get('arrivalTime'),
            'ticketPrice'=> $request ->get('ticketPrice')
            
        ]);
        $trainSchedule->save();
        return response() -> json("Train Schedule Created Successfully");
    }
    //method to edit the trainSchedule by id
    public function edit($id){
        $trainSchedule = TrainSchedule::find($id);
        return response() -> json($trainSchedule);
    }
    //method to update the train schedule by id
    public function update(Request $request, $id){
        $trainSchedule = TrainSchedule::find($id);
        $trainSchedule-> route = $request ->get('route');
        $trainSchedule-> departure = $request ->get('departure');
        $trainSchedule-> arrivalTime =$request ->get('arrivalTime');
        $trainSchedule-> ticketPrice = $request ->get('ticketPrice');
        $trainSchedule->save();

        return response() -> json("Train Schedule Update Successfully ");
    }
    // method to delete the train schedule
    public function delete($id){
        $trainSchedule = TrainSchedule::find($id);
        $trainSchedule->delete();

        return response() -> json("Train Schedule Deleted Successfully");
    }
}
