using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Linq;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace DataAccess.EFCore.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        protected readonly ApplicationContext _context;
        internal DbSet<T> dbSet;
        public GenericRepository(ApplicationContext context)
        {
            _context = context;
            dbSet = _context.Set<T>();
        }

        public  virtual async Task<bool> Add(T entity)
        {
            await dbSet.AddAsync(entity);
            return true;
            throw new NotImplementedException();
        }

        public void AddRange(IEnumerable<T> entities)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> Find(Expression<Func<T, bool>> expression)
        {
            throw new NotImplementedException();
        }

        public virtual Task<IEnumerable<T>> GetAll()
        {
            //return _context.Students.FindAsync().;
            throw new NotImplementedException();
        }

        public virtual async Task<T> GetById(int id)
        {
            return await dbSet.FindAsync(id);
        }

        public virtual Task<bool>Update(T entity)
        {
            throw new NotImplementedException();
        }


        public virtual async Task<bool> Delete(int id)
        {
            throw new NotImplementedException();
        }
        public void Remove(T entity)
        {
            throw new NotImplementedException();
        }

        public void RemoveRange(IEnumerable<T> entities)
        {
            throw new NotImplementedException();
        }
    }
}
