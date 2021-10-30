using System;
using System.Collections.Generic;
using System.Text;
using Domain.Domain;

namespace Domain.Interfaces
{
   public interface IStudentRepository:IGenericRepository<Student>
    {
        IEnumerable<Student> GetStudents(int id);
       

    }
}
