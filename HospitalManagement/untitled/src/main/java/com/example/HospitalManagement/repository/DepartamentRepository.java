package com.example.HospitalManagement.repository;

import com.example.HospitalManagement.data.departament.ViewDepartament;
import com.example.HospitalManagement.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DepartamentRepository extends JpaRepository<Department, Long> {

    @Query("select new com.example.HospitalManagment.data.departament.ViewDepartament(d.id,d.departmentName,d.description,d.departamentSize,d.departamentStatus) from Department d where d.deletedAt is null ")
    List<ViewDepartament> getAllDepartaments();
}
