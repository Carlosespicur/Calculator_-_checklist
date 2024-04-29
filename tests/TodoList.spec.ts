import { mount } from '@vue/test-utils';
import TodoList from '../components/TodoList.vue';

describe('TodoList', () => {
  it('adds a new task to the list', async () => {
    const wrapper = mount(TodoList);
    const input = wrapper.find('input');
    await input.setValue('New Task');
    await input.trigger('keyup.enter');
    expect(wrapper.findAll('li').length).toBe(1);
    expect(wrapper.find('li').text()).toBe('New Task');
  });
  it('does not add empty tasks', async () => {
    const wrapper = mount(TodoList);
    const input = wrapper.find('input');
    await input.setValue(''); // Introducimos una tarea vacía
    await input.trigger('keyup.enter');
    expect(wrapper.findAll('li').length).toBe(0); // No debería agregar una tarea vacía
  });
});