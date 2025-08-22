package com.example.HospitalManagement.service;

import com.example.HospitalManagement.common.ResponseObject;
import com.example.HospitalManagement.data.Room.CreateRoom;
import com.example.HospitalManagement.data.Room.ViewRoom;
import com.example.HospitalManagement.data.patient.ViewPatient;
import com.example.HospitalManagement.entity.Department;
import com.example.HospitalManagement.entity.Room;
import com.example.HospitalManagement.repository.DepartamentRepository;
import com.example.HospitalManagement.repository.RoomRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;
    private final DepartamentRepository departamentRepository;

    public CreateRoom createRoom(CreateRoom createRoom) {

        Room room=new Room();
        if(createRoom!=null){
            Department department = departamentRepository.findById(createRoom.getDepartamentId()).orElseThrow(()->new RuntimeException("Room with id:"+ createRoom.getDepartamentId()+"  not found"));
            room.setDepartament(department);
            room.setRoomName(createRoom.getRoomName());
            room.setDescription(createRoom.getDescription());
            room.setFloor(createRoom.getFloor());
            room.setNrOfBeds(createRoom.getNrOfBeds());

        }
        roomRepository.save(room);
        return createRoom;
    }

    public CreateRoom updateRoom(Long id, CreateRoom createRoom) {
        Room room = roomRepository.findById(id).orElseThrow(() -> new RuntimeException("Room not found!"));

        room.setRoomName(createRoom.getRoomName());
        room.setDescription(createRoom.getDescription());
        room.setFloor(createRoom.getFloor());
        room.setNrOfBeds(createRoom.getNrOfBeds());

        roomRepository.save(room);
        return createRoom;

    }
    public boolean deleteRoom(Long id) {
        Room room = roomRepository.findById(id).orElseThrow(() -> new RuntimeException("Room not found!"));
        room.setDeletedAt(LocalDateTime.now());
        roomRepository.save(room);
        return true;
    }

    public ResponseObject allRooms(){
        List<ViewRoom> rooms = roomRepository.findAllRooms();
        ResponseObject responseObject = new ResponseObject();
        responseObject.setData(rooms);
        return responseObject;
    }
    public ResponseObject getRoomById(Long id) {
        ResponseObject responseObject = new ResponseObject();
        ViewRoom nurse = roomRepository.findViewPatientById(id)
                .orElseThrow(() -> new RuntimeException("Nurse with ID " + id + " not found"));
        responseObject.setData(nurse);
        responseObject.setStatus(HttpStatus.OK.value());
        return responseObject;
    }
}
