import { Flex, GridItem, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { fetchStudent } from '../actions/index';
import { Loader } from '../components/Loading';
import { Error } from '../components/Error';

const Students = () => {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudent());
  },[dispatch]);

  const renderStudents = () => {
    if (loading) {
      return (
        <GridItem colSpan={4}>
          <Loader />
        </GridItem>
      );
    }
    if (error) {
      return (
        <GridItem colSpan={4}>
          <Error />
        </GridItem>
      );
    }

    return students.map((student) => (
      <Card style={{ widht: '21rem' }} className="bg-dark text-white mt-3" key={student.id}> 
      <Card.Img />
    
    </Card>
      )
    )
  }

  return (
    <Flex wrap="wrap" display="flex" w="100%">
      {renderStudents()}
    </Flex>
  );
};

export default Students;