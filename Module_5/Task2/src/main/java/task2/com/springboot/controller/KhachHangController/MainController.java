package task2.com.springboot.controller.KhachHangController;

import task2.com.springboot.model.DBKhachHang;
import task2.com.springboot.service.KhachHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class MainController {

    @Autowired
    KhachHangService khachHangService;
    @GetMapping("/khachhang")
    public ModelAndView testModel(){
        List<DBKhachHang> listkh=khachHangService.findAll();
        ModelAndView modelAndView=new ModelAndView("/KhachHang/list");
        modelAndView.addObject("listkh",listkh);
        return modelAndView;
    }

    @PostMapping("/create-khachhang")
    public ModelAndView addKhachHang(@ModelAttribute("/create-khachhang") DBKhachHang dbKhachHang){
        khachHangService.saveKH(dbKhachHang);
        ModelAndView modelAndView=new ModelAndView("/KhachHang/Create");
        modelAndView.addObject("khachhang",new DBKhachHang());
        modelAndView.addObject("message","Create successful.");
        return  modelAndView;
    }
}

