package com.example.HospitalManagement.entity;

import com.example.HospitalManagement.config.tenant.aspect.TenantAware;
import com.example.HospitalManagement.config.tenant.aspect.TenantListener;
import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.Filter;
import org.hibernate.annotations.FilterDef;
import org.hibernate.annotations.ParamDef;

import java.io.Serializable;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@MappedSuperclass
@FilterDef(name = "tenantFilter", parameters = {@ParamDef(name = "tenantId", type = String.class)})
@Filter(name = "tenantFilter", condition = "tenant_id = :tenantId")
@EntityListeners(TenantListener.class)
public abstract class DataEntity extends BaseEntity implements TenantAware, Serializable {

    @Column(name = "tenant_id",updatable = false)
    private String tenantId;

}