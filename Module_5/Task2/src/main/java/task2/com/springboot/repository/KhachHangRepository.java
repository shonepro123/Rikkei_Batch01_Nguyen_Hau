package task2.com.springboot.repository;

import task2.com.springboot.model.DBKhachHang;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KhachHangRepository extends JpaRepository<DBKhachHang,Integer> {
}
