package com.example.HospitalManagement.service;

import com.example.HospitalManagement.common.ResponseObject;
import com.example.HospitalManagement.data.appointment.CreateAppointment;
import com.example.HospitalManagement.data.appointment.ViewAppointment;
import com.example.HospitalManagement.data.city.CreateCity;
import com.example.HospitalManagement.data.nurse.ViewNurse;
import com.example.HospitalManagement.entity.Appointment;
import com.example.HospitalManagement.entity.City;
import com.example.HospitalManagement.entity.Doctor;
import com.example.HospitalManagement.entity.Patient;
import com.example.HospitalManagement.repository.AppointmentRepository;
import com.example.HospitalManagement.repository.CityRepository;
import com.example.HospitalManagment.repository.DoctorRepository;
import com.example.HospitalManagement.repository.PatientRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class AppointmentService {


    private final AppointmentRepository appointmentRepository;
    private final DoctorRepository doctorRepository;
    private final PatientRepository patientRepository;

    public CreateAppointment createAppointment(CreateAppointment createAppointment) {

        Appointment appointment = new Appointment();
        if (createAppointment != null) {

            Patient patient = patientRepository.findById(createAppointment.getPatientId()).orElseThrow(() -> new RuntimeException("patient not found"));
            appointment.setPatient(patient);

            Doctor doctor = doctorRepository.findById(createAppointment.getDoctorId()).orElseThrow(() -> new RuntimeException("Department not found"));
            appointment.setDoctor(doctor);

            appointment.setReason(createAppointment.getReason());
            appointment.setStatus(createAppointment.getStatus());

            appointmentRepository.save(appointment);
        }
        return createAppointment;
    }


    public ResponseObject getAppointments() {
        ResponseObject responseObject = new ResponseObject();
        List<ViewAppointment> nurses=appointmentRepository.viewAllAppointments();
        responseObject.setData(nurses);
        return responseObject;
    }



    public Boolean deleteAppointment(Long id) {
        Appointment appointment= appointmentRepository.findById(id).orElseThrow(() -> new RuntimeException("appointment not found"));
        appointment.setDeletedAt(LocalDateTime.now());
        return true;
    }

    public CreateAppointment updateAppointment(CreateAppointment createAppointment,Long id) {
        Appointment appointment= appointmentRepository.findById(id).orElseThrow(() -> new RuntimeException("appointment not found"));

        if (createAppointment != null) {

            Patient patient = patientRepository.findById(createAppointment.getPatientId()).orElseThrow(() -> new RuntimeException("patient not found"));
            appointment.setPatient(patient);

            Doctor doctor = doctorRepository.findById(createAppointment.getDoctorId()).orElseThrow(() -> new RuntimeException("Department not found"));
            appointment.setDoctor(doctor);

            appointment.setReason(createAppointment.getReason());
            appointment.setStatus(createAppointment.getStatus());

            appointmentRepository.save(appointment);
        }
        return createAppointment;
    }

    public ResponseObject getAppointmentsByDoctorId(Long doctorId) {
        ResponseObject responseObject = new ResponseObject();
        List<ViewAppointment> appointments = appointmentRepository.viewAppointmentsByDoctorId(doctorId);
        responseObject.setData(appointments);
        return responseObject;
    }

}
