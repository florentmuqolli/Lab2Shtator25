package com.example.HospitalManagement.repository;

import com.example.HospitalManagement.data.city.ViewCity;
import com.example.HospitalManagement.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CityRepository extends JpaRepository<City, Long> {

    List<City> findAllByDeletedAtIsNull();

    @Query("select new com.example.HospitalManagment.data.city.ViewCity(c.id,c.name)" +
            "from City c " +
            "where c.deletedAt is null ")
    List<ViewCity> viewAllCity();
}
