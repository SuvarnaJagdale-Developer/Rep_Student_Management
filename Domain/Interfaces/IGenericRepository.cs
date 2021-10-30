using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
   public interface IGenericRepository<T> where T : class
    {
        Task <T> GetById(int id);



        Task <IEnumerable<T>> GetAll();

        Task<bool> Add(T entity);
        Task<bool> Update(T entity);
        IEnumerable<T> Find(Expression<Func<T, bool>> expression);
        Task<bool> Delete(int id);
        void AddRange(IEnumerable<T> entities);
        void Remove(T entity);
        void RemoveRange(IEnumerable<T> entities);
    }
}
