package com.example.HospitalManagement.service;
import com.example.HospitalManagement.common.ResponseObject;
import com.example.HospitalManagement.data.RegisterRequestForAllEntityDTO;
import com.example.HospitalManagement.data.departament.CreateDepartament;
import com.example.HospitalManagement.data.departament.ViewDepartament;
import com.example.HospitalManagement.data.doctor.CreateDoctor;
import com.example.HospitalManagement.data.doctor.ViewDoctor;
import com.example.HospitalManagement.entity.City;
import com.example.HospitalManagement.entity.Department;
import com.example.HospitalManagement.entity.Doctor;
import com.example.HospitalManagement.repository.CityRepository;
import com.example.HospitalManagement.repository.DepartamentRepository;
import com.example.HospitalManagement.repository.DoctorRepository;
import jakarta.mail.MessagingException;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import jakarta.validation.Valid;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class DoctorService {
    private final DoctorRepository doctorRepository;
    private final DepartamentRepository departamentRepository;
    private final CityRepository cityRepository;
    private final EmailService emailService;

    public ResponseObject getDoctors() {
        ResponseObject responseObject = new ResponseObject();
        List<ViewDoctor> doctors=doctorRepository.getAllDoctors();
        responseObject.setData(doctors);
        return responseObject;
    }

    public void createDoctor(RegisterRequestForAllEntityDTO createDoctor) throws MessagingException, IOException {

        Doctor doctor = new Doctor();

        Department departament = departamentRepository.findById(createDoctor.getDepartmentId()).orElseThrow(()->new RuntimeException("Department not found"));
        City city = cityRepository.findById(createDoctor.getCityId()).orElseThrow(()->new RuntimeException("City not found"));

        if(createDoctor!= null) {
            doctor.setFirstName(createDoctor.getFirstName());
            doctor.setLastName(createDoctor.getLastName());
            doctor.setAge(createDoctor.getAge());
            doctor.setGender(createDoctor.getGender());
            doctor.setPhoneNumber(createDoctor.getPhoneNumber());
            doctor.setSpecialization(createDoctor.getSpecialization());
            doctor.setQualification(createDoctor.getQualification());
            doctor.setEmail(createDoctor.getEmail());
            doctor.setIsActive(createDoctor.getIsActive());
            doctor.setDepartament(departament);
            doctor.setCity(city);

            doctorRepository.save(doctor);
        }
        emailService.sendWelcomeEmailToDoctor(doctor.getId());

    }

    public CreateDoctor updateDoctor(CreateDoctor createDoctor,Long id){

        Doctor doctor = doctorRepository.findById(id).orElseThrow(()->new RuntimeException("Doctor not found"));
        Department departament = departamentRepository.findById(createDoctor.getDepartmentId()).orElseThrow(()->new RuntimeException("Department not found"));
        City city = cityRepository.findById(createDoctor.getCityId()).orElseThrow(()->new RuntimeException("City not found"));

        doctor.setFirstName(createDoctor.getFirstName());
        doctor.setLastName(createDoctor.getLastName());
        doctor.setAge(createDoctor.getAge());
        doctor.setGender(createDoctor.getGender());
        doctor.setPhoneNumber(createDoctor.getPhoneNumber());
        doctor.setSpecialization(createDoctor.getSpecialization());
        doctor.setQualification(createDoctor.getQualification());
        doctor.setIsActive(createDoctor.getIsActive());
        doctor.setDepartament(departament);
        doctor.setCity(city);


        return createDoctor;

    }

    public Boolean deleteDoctor(Long id){
        Doctor doctor = doctorRepository.findById(id).orElseThrow(()->new RuntimeException("Doctor not found"));

        doctor.setDeletedAt(LocalDateTime.now());
        doctorRepository.save(doctor);

        return true;
    }
    public long countSoftDeletedDoctors() {
        return doctorRepository.countSoftDeletedDoctors();
    }
}

