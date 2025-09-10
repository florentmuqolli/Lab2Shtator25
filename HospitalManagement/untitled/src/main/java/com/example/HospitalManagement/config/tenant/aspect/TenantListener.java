package com.example.HospitalManagement.config.tenant.aspect;

import com.example.HospitalManagement.config.tenant.TenantContext;
import com.example.HospitalManagement.config.tenant.aspect.TenantAware;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreRemove;
import jakarta.persistence.PreUpdate;
import lombok.extern.log4j.Log4j2;

@Log4j2
public class TenantListener {

    @PreUpdate
    @PreRemove
    @PrePersist
    public void setTenant(Object entity) {
        final String tenantId = TenantContext.getTenantId();
        log.info("Setting tenantId in TenantListener: {}", tenantId);
        ((TenantAware) entity).setTenantId(tenantId);
    }
}
