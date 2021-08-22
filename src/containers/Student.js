import { GridItem, Text, Grid, Box, Divider, Input } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Image } from 'react-bootstrap';
import { fetchStudent } from '../actions/index';
import { Loader } from '../components/Loading';
import { Error } from '../components/Error';

const Students = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { students, loading, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudent());
  },[dispatch]);

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

  return (
    <Container className="card">
      <Input 
        type="search" 
        placeholder="Search by name..."  
        className="search" 
        onChange={e => {setSearchName(e.target.value)}} 
      />
      {
        students.filter((val) => {
          if (searchName === '') {
            return val;
          } else if (val.firstName.toLowerCase().includes(searchName.toLowerCase()) || val.lastName.toLowerCase().includes(searchName.toLowerCase())) {
            return val;
          }
        }).map((student) => (
          
            <Grid templateColumns="repeat(3, 1fr)" key={student.id}>
              <GridItem>
                <Box w="50%">
                  <Image src={student.pic} className="img-fluid img-thumbnail roundedCircle image" alt="student picture" />
                </Box>
              </GridItem>
              <GridItem colSpan={2}>
                <Box w="100%">
                  <Text 
                    fontSize="4xl" 
                    color="black"
                  >
                    {student.firstName}
                    {' '}
                    {student.lastName}
                  </Text>
                  <Text>
                      Email: 
                      {' '}
                      {student.email}
                  </Text>
                  <Text>
                    Company: 
                    {' '}
                    {student.company}
                  </Text>
                  <Text>
                    Skills: 
                    {' '}
                    {student.skill}
                  </Text>
                  <Text>
                    Average: 
                    {' '}
                    {(student.grades.reduce((a,b) => a + parseFloat(b),0) / student.grades.length)}
                  </Text>
                </Box>
                <div className="switch">
                  <button
                    className="toggle"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    +
                  </button>
                  { isOpen && <div className="content">
                    <ul className="notes">
                      <li>
                        Test 1:
                        {' '}
                        {students.grades}
                      </li>
                      <li>
                        Test 2:
                        {' '}
                      </li>
                      <li>
                        Test 3:
                        {' '}
                      </li>
                      <li>
                        Test 4:
                        {' '}
                      </li>
                      <li>
                        Test 5:
                        {' '}
                      </li>
                      <li>
                        Test 6:
                        {' '}
                      </li>
                      <li>
                        Test 7:
                        {' '}
                      </li>
                      <li>
                        Test 8:
                        {' '}
                      </li>
                    </ul>
                    </div>
                  }
                </div>
                {/* <Expandables /> */}
              </GridItem>
              <Divider className="Divider"/>
            </Grid>
        ))
      }
    </Container>
  )
  
};

export default Students;
                                               