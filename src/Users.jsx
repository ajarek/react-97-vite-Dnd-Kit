import { useState } from 'react'
import { data } from './assets/data'
import { closestCenter, DndContext } from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const SortableUser = ({ user, onRemove }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: user.id })
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  const handleRemove = () => {
    console.log('remove')
    onRemove(user.id)
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className='user'
    >
      {user.name}
      <button
        onClick={handleRemove}
        className='btn-delete'
      >
        ❌
      </button>
    </div>
  )
}

const Users = () => {
  const [users, setUsers] = useState(data)
  const [inputValue, setInputValue] = useState('')

  const addUser = () => {
    const newUser = { id: Date.now().toString(), name: inputValue }
    setInputValue('')
    setUsers((users) => [...users, newUser])
  }

  const onDragEnd = (event) => {
    const { active, over } = event
    if (active.id === over.id) {
      return
    }
    setUsers((users) => {
      const oldIndex = users.findIndex((user) => user.id === active.id)
      const newIndex = users.findIndex((user) => user.id === over.id)
      return arrayMove(users, oldIndex, newIndex)
    })
  }

  const handleItemRemove = (itemId) => {
    const updatedItems = users.filter((item) => item.id !== itemId)
    setUsers(updatedItems)
  }

  return (
    <div className='users'>
      <div>Total: {users.length}</div>
      <div className='users-form'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addUser}>Add user</button>
      </div>
      <div>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
        >
          <SortableContext
            items={users}
            strategy={verticalListSortingStrategy}
          >
            {users.map((user) => (
              <SortableUser
                key={user.id}
                user={user}
                onRemove={handleItemRemove}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  )
}
export default Users
