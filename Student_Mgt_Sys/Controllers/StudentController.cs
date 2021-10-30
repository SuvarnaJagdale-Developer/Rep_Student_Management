using Domain.Domain;
using Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Mgt_Sys.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        public StudentController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IActionResult GetStudents([FromQuery] int count)
        {
            var studentdetails = _unitOfWork.Students.GetStudents(count);
            return Ok(studentdetails);
        }
        [HttpGet]
        public async Task<IActionResult>GetAll()
        {
            var users = await _unitOfWork.Students.GetAll();
            return Json(new { Success = true, data = users });
            //return Ok(users);
        }
        [HttpPost("createStudent")]
        public async Task<IActionResult>CreateStudent([FromBody] Student student)
        {


            if (ModelState.IsValid)
            {
               // student.Id = _unitOfWork.
                //student.Id = Convert.ToInt32(Guid.NewGuid());
                await _unitOfWork.Students.Add(student);
                await _unitOfWork.CompleteAsync();
                return CreatedAtAction("GetStudent", new { student.Id }, student);


            }
            return new JsonResult("somethingn went wrong") { StatusCode = 500 };
        }
        [HttpPost("deleteStudent")]
        public async Task<IActionResult> DeleteStudent([FromBody] int id)
        {
            var item = await _unitOfWork.Students.GetById(id);

            if (item == null)
                return BadRequest();

            await _unitOfWork.Students.Delete(id);
            await _unitOfWork.CompleteAsync();

            return Ok(item);
        }

        [HttpPost("updateStudent")]
        public async Task<IActionResult> UpdateStudent([FromBody] Student student)
        {
          

            await _unitOfWork.Students.Update(student);
            await _unitOfWork.CompleteAsync();

            return Ok();
        }


    }
}
