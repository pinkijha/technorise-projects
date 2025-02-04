// allCandidateDataAtom
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import conf from '../config/index';
import {
  allCandidateDataAtom,
  allCandidatesCountAtom,
  candidateCenterCountAtom,
  candidateDetailIDAtom,
  candidateVisitAtom,
  submittedCandidateAtom
} from '../state/candidateData';
import { toastState } from '../state/toastState';
import useFetch from './useFetch';

const useCandidates = () => {
  const [fetchData] = useFetch();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState('');
  const [candidates, setCandidates] = useRecoilState(allCandidateDataAtom);
  const [submittedCandidates, setSubmittedCandidates] = useRecoilState(submittedCandidateAtom);
  const [modifyCandidates, setModifyCandidates] = useRecoilState(toastState);
  const [modifyCandidatesResult, setModifyCandidatesReult] = useRecoilState(toastState);
  const [genCenterCode, setGenCenterCode] = useRecoilState(toastState);
  const [deletePatientData, setDeletePatientData] = useRecoilState(toastState);
  const [candidateCount, setCandidateCount] = useRecoilState(allCandidatesCountAtom);
  const [candidateDetails, setCandidateDatails] = useRecoilState(candidateDetailIDAtom);
  const [candidateVisit, setCandidateVisit] = useRecoilState(candidateVisitAtom);
  const [centerCountData, setCenterCountData] = useRecoilState(candidateCenterCountAtom);

  const fetchCandidateCount = async (fromDate, toDate) => {
    setLoading(true);
    try {
      await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}admin/getAllPatientsCount?fromDate=${fromDate}&toDate=${toDate}`
      }).then((res) => {
        if (res) {
          setCandidateCount(res);
        }
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching getAllPatients:', error);
    }
  };

  const fetchAllCandidates = async () => {
    setLoading(true);
    try {
      // Send a GET request to fetch the getAllPatients dropdown data
      await fetchData({ method: 'GET', url: `${conf.apiBaseUrl}admin/getAllPatients` }).then(
        (res) => {
          if (res) {
            setCandidates(res?.totalData);
          }
        }
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching getAllPatients:', error);
    }
  };

  const fetchFilterData = async (filters) => {
    try {
      // Ensure filters are defined
      if (!filters) {
        throw new Error('No filters provided');
      }
      // Construct query parameters from filters
      const params = new URLSearchParams(filters).toString();
      const url = `${conf.apiBaseUrl}admin/getAllPatients?${params}`;

      const response = await fetch(url, {
        method: 'GET', // Ensure the method is GET
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setCandidates(data?.totalData); // Ensure you have setCandidates properly defined
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching filter data:', error);
    }
  };

  const fetchSubmiitedCandidates = async () => {
    setLoading(true);
    try {
      await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}admin/getAllPatientsForSubmitted`
      }).then((res) => {
        if (res) {
          setSubmittedCandidates(res?.totalData);
        }
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching getAllPatients:', error);
    }
  };

  const fetchSubmittedFilterData = async (filters) => {
    try {
      if (!filters) {
        throw new Error('No filters provided');
      }
      const params = new URLSearchParams(filters).toString();
      const url = `${conf.apiBaseUrl}admin/getAllPatientsForSubmitted?${params}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setSubmittedCandidates(data?.totalData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching filter data:', error);
    }
  };

  const fetchCandidatesCenterCount = async () => {
    setLoading(true);
    try {
      // Send a GET request to fetch the getAllPatients dropdown data
      await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}admin/getCenterCountsByCenterAndDate`
      }).then((res) => {
        if (res) {
          setCenterCountData(res?.totalData);
        }
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching getAllPatients:', error);
    }
  };

  const fetchCandidatesById = async (id) => {
    try {
      // Set loading state to true
      setLoading(true);

      // Fetch the branch details from the API
      const res = await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}admin/getPatientById/${id}`
      });

      // If the response contains data, update the branch details state
      if (res?.data) {
        setCandidateDatails(res?.data);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching  :', error);
    } finally {
      // Set loading state to false after the request is complete
      setLoading(false);
    }
  };

  const updateCandidates = async (id, updateData) => {
    setLoading(true);
    try {
      fetchData({
        method: 'PUT',
        url: `${conf.apiBaseUrl}admin/updatePatient/${id}`,
        data: updateData
      }).then((res) => {
        if (res) {
          setModifyCandidates(res?.message);
        }
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error updating email template:', error);
      setLoading(false);
    }
  };

  const updateCandidatesResult = async (updateData) => {
    setLoading(true);
    try {
      fetchData({
        method: 'PUT',
        url: `${conf.apiBaseUrl}admin/updateManyUsers`,
        data: updateData
      }).then((res) => {
        if (res) {
          setModifyCandidatesReult(res?.message);
        }
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error updating email template:', error);
      setLoading(false);
    }
  };

  const generateCenterCode = async (data) => {
    setLoading(true);
    try {
      fetchData({
        method: 'POST',
        url: `${conf.apiBaseUrl}admin/createCenterCode`,
        data: data
      }).then((res) => {
        if (res) {
          setGenCenterCode(res);
        }
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error updating email template:', error);
      setLoading(false);
    }
  };

  const fetchGraphData = async (timeFrame) => {
    try {
      setLoading(true);
      const res = await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}admin/getPatientCountsForGraph?timeFrame=${timeFrame}`
      });
      if (res) {
        setCandidateVisit(res?.totalData);
      } else {
        setErrors('No data found');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching  :', error);
    } finally {
      setLoading(false);
    }
  };

  const deletePatient = async (id) => {
    setLoading(true);
    try {
      const res = await fetchData({
        method: 'POST',
        url: `${conf.apiBaseUrl}admin/deletePatient/${id}`
      });
      if (res) {
        setDeletePatientData(res?.message);
        fetchAllCandidates();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error deleting:', error);
    }
  };

  return {
    fetchAllCandidates,
    modifyCandidatesResult,
    updateCandidatesResult,
    fetchFilterData,
    candidates,
    loading,
    fetchCandidateCount,
    candidateCount,
    fetchCandidatesById,
    candidateDetails,
    updateCandidates,
    modifyCandidates,
    fetchGraphData,
    candidateVisit,
    errors,
    fetchCandidatesCenterCount,
    centerCountData,
    fetchSubmittedFilterData,
    deletePatient,
    submittedCandidates,
    fetchSubmiitedCandidates,
    deletePatientData,
    genCenterCode,
    generateCenterCode
  };
};
export default useCandidates;
