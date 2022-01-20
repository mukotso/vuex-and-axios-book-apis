<template>
  <div class="container">
    <router-view></router-view>
    <button  class=" mb-5 ml-5 bg-green-500 hover:bg-maroon-700 text-white font-bold py-2 px-4 border  rounded">

      <router-link :to="{ name: 'addSchedule'}">ADD NEW SCHEDULE</router-link>

    </button>
    <div class='overflow-x-auto w-full'>
      <table class=' mb-20 mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
        <thead class="bg-gray-900">
        <tr class="text-white text-left">
          <th class="font-semibold text-sm uppercase px-6 py-4">#</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Day</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Task</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Number Of Task</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Status</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Started at </th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Completed at </th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Action </th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">

        <tr v-for="(schedule,index) in schedules" :key="index">
          <td class="px-6 py-4 text-gray-500 text-sm font-semibold tracking-wide">{{ schedule.id }}</td>
          <td>{{ schedule.day }}</td>
          <td>{{ schedule.task }}</td>
          <td>{{ schedule.taskNumber }}</td>
          <td>{{ schedule.status }}</td>

          <td>{{ schedule.started_at }}</td>
          <td>{{ schedule.completed_at }}</td>
          <td>
            <button @click="editTask" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              EDIT
            </button>
            <button @click="deleteTask"  class=" ml-5 bg-red-500 hover:bg-maroon-700 text-white font-bold py-2 px-4 border  rounded">
              DELETE
            </button>

            <button  class=" ml-5 bg-green-500 hover:bg-green-100 text-white font-bold py-2 px-4 border  rounded">
              <router-link :to="{ name: 'schedule-details', params: { id: schedule.id }}">VIEW DETAILS</router-link>
            </button>
          </td>

        </tr>




        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schedules: [
        { id:1,day: '17th January 2020', task: 'Component Registration', taskNumber: '4', status: 'completed',started_at:"12:04AM",completed_at:"4:00PM" },
        { id:2,day: '18th January 2020', task: 'Transition and animation', taskNumber: '4', status: 'started',started_at:"12:04AM",completed_at:"3:00PM" },
        { id:3,day: '19th January 2020', task: 'Reusability and composition', taskNumber: '4', status: 'pending',started_at:"12:04AM",completed_at:"4:00PM" },
        { id:4,day: '20th January 2020', task: 'Tooling',taskNumber: '4', status: 'pending',started_at:"11:00AM",completed_at:"8:00PM" },
        { id:5,day: '21st January 2020', task: 'Migrating', taskNumber: '4', status: 'pending',started_at:"10:44AM",completed_at:"9:00PM" },
        { id:6,day: '22nd January 2020', task: 'Migrating', taskNumber: '4', status: 'pending',started_at:"12:16AM",completed_at:"1:00PM" }
      ],


      completed:true,
      isScheduled:true
    };
  },
  methods: {
    addTask() {
      alert('TASK ADDED');
    },
    deleteTask() {
      confirm('A YOU SURE YOU WANT TO DELETE THE TASK');
      alert('TASK DELETED SUCCESSFULLY');
    },
    editTask() {
      alert('TASK EDITED SUCCESSFULLY');
    }
  }
};
</script>