using System;
using System.Collections.Generic;
using System.Text;
using Domain.Interfaces;
using Domain.Domain;
using System.Linq.Expressions;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace DataAccess.EFCore.Repositories
{
    public class StudentRepository:GenericRepository<Student>,IStudentRepository
    {
        public StudentRepository(ApplicationContext context) : base(context)
        {
        }

        public IEnumerable<Student> GetStudents(int id)
        {
            return _context.Students.OrderByDescending(d => d.Name).Take(id).ToList();
            //throw new NotImplementedException();
        }
        public override async Task<IEnumerable<Student>> GetAll()
        {
            try
            {
                return await dbSet.ToListAsync();
            }
            finally
            {

            } 
        }
            public override async Task<bool>Update(Student entity)
            
            {
            try
            {
                var existingUser = await dbSet.Where(x => x.Id == entity.Id).FirstOrDefaultAsync();
                if (existingUser == null)
                    return await Add(entity);
                existingUser.Name = entity.Name;
                existingUser.LastName = entity.LastName;
                existingUser.age = entity.age;
                existingUser.date = entity.date;
                existingUser.Address = entity.Address;
                existingUser.Room_No = entity.Room_No;
                existingUser.Teacher_name = entity.Teacher_name;
                existingUser.Year = entity.Year;
                return true;
            }
            catch(Exception ex)
            {
                return false;
            }
        }

        public override async Task<bool> Delete(int id)
        {
            try
            {
                var exist = await dbSet.Where(x => x.Id == id).FirstOrDefaultAsync();

                if (exist == null)
                    return false;
                dbSet.Remove(exist);
                return true;
            }

            catch(Exception ex)
            {
                return false;
            }
        }

    }
}
