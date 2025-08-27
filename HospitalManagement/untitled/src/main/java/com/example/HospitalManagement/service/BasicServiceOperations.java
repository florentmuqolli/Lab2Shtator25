package com.example.HospitalManagement.service;

import com.example.HospitalManagement.entity.BaseEntity;
import com.example.HospitalManagement.exception.EntityValidationException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

@RequiredArgsConstructor
public abstract class BasicServiceOperations<R extends JpaRepository<E, Long>, E extends BaseEntity> {

    protected final R repository;

    public E save(E entity) {
        validateEntity(entity);
        return repository.save(entity);
    }

    public E findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<E> findByIds(Set<Long> ids) {
        return repository.findAllById(ids);
    }

    public List<E> findAll() {
        return repository.findAll();
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    protected void validateEntity(E entity) throws EntityValidationException {}
}
