package com.yue.blog.dao.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BlogConfigDOExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public BlogConfigDOExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Long value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Long value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Long value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Long value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Long value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Long value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Long> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Long> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Long value1, Long value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Long value1, Long value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andGmtCreateIsNull() {
            addCriterion("gmt_create is null");
            return (Criteria) this;
        }

        public Criteria andGmtCreateIsNotNull() {
            addCriterion("gmt_create is not null");
            return (Criteria) this;
        }

        public Criteria andGmtCreateEqualTo(Date value) {
            addCriterion("gmt_create =", value, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateNotEqualTo(Date value) {
            addCriterion("gmt_create <>", value, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateGreaterThan(Date value) {
            addCriterion("gmt_create >", value, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateGreaterThanOrEqualTo(Date value) {
            addCriterion("gmt_create >=", value, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateLessThan(Date value) {
            addCriterion("gmt_create <", value, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateLessThanOrEqualTo(Date value) {
            addCriterion("gmt_create <=", value, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateIn(List<Date> values) {
            addCriterion("gmt_create in", values, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateNotIn(List<Date> values) {
            addCriterion("gmt_create not in", values, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateBetween(Date value1, Date value2) {
            addCriterion("gmt_create between", value1, value2, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateNotBetween(Date value1, Date value2) {
            addCriterion("gmt_create not between", value1, value2, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedIsNull() {
            addCriterion("gmt_modified is null");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedIsNotNull() {
            addCriterion("gmt_modified is not null");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedEqualTo(Date value) {
            addCriterion("gmt_modified =", value, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedNotEqualTo(Date value) {
            addCriterion("gmt_modified <>", value, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedGreaterThan(Date value) {
            addCriterion("gmt_modified >", value, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedGreaterThanOrEqualTo(Date value) {
            addCriterion("gmt_modified >=", value, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedLessThan(Date value) {
            addCriterion("gmt_modified <", value, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedLessThanOrEqualTo(Date value) {
            addCriterion("gmt_modified <=", value, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedIn(List<Date> values) {
            addCriterion("gmt_modified in", values, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedNotIn(List<Date> values) {
            addCriterion("gmt_modified not in", values, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedBetween(Date value1, Date value2) {
            addCriterion("gmt_modified between", value1, value2, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedNotBetween(Date value1, Date value2) {
            addCriterion("gmt_modified not between", value1, value2, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andConfKeyIsNull() {
            addCriterion("conf_key is null");
            return (Criteria) this;
        }

        public Criteria andConfKeyIsNotNull() {
            addCriterion("conf_key is not null");
            return (Criteria) this;
        }

        public Criteria andConfKeyEqualTo(String value) {
            addCriterion("conf_key =", value, "confKey");
            return (Criteria) this;
        }

        public Criteria andConfKeyNotEqualTo(String value) {
            addCriterion("conf_key <>", value, "confKey");
            return (Criteria) this;
        }

        public Criteria andConfKeyGreaterThan(String value) {
            addCriterion("conf_key >", value, "confKey");
            return (Criteria) this;
        }

        public Criteria andConfKeyGreaterThanOrEqualTo(String value) {
            addCriterion("conf_key >=", value, "confKey");
            return (Criteria) this;
        }

        public Criteria andConfKeyLessThan(String value) {
            addCriterion("conf_key <", value, "confKey");
            return (Criteria) this;
        }

        public Criteria andConfKeyLessThanOrEqualTo(String value) {
            addCriterion("conf_key <=", value, "confKey");
            return (Criteria) this;
        }

        public Criteria andConfKeyLike(String value) {
            addCriterion("conf_key like", value, "confKey");
            return (Criteria) this;
        }

        public Criteria andConfKeyNotLike(String value) {
            addCriterion("conf_key not like", value, "confKey");
            return (Criteria) this;
        }

        public Criteria andConfKeyIn(List<String> values) {
            addCriterion("conf_key in", values, "confKey");
            return (Criteria) this;
        }

        public Criteria andConfKeyNotIn(List<String> values) {
            addCriterion("conf_key not in", values, "confKey");
            return (Criteria) this;
        }

        public Criteria andConfKeyBetween(String value1, String value2) {
            addCriterion("conf_key between", value1, value2, "confKey");
            return (Criteria) this;
        }

        public Criteria andConfKeyNotBetween(String value1, String value2) {
            addCriterion("conf_key not between", value1, value2, "confKey");
            return (Criteria) this;
        }

        public Criteria andConfCreatedEmpIsNull() {
            addCriterion("conf_created_emp is null");
            return (Criteria) this;
        }

        public Criteria andConfCreatedEmpIsNotNull() {
            addCriterion("conf_created_emp is not null");
            return (Criteria) this;
        }

        public Criteria andConfCreatedEmpEqualTo(String value) {
            addCriterion("conf_created_emp =", value, "confCreatedEmp");
            return (Criteria) this;
        }

        public Criteria andConfCreatedEmpNotEqualTo(String value) {
            addCriterion("conf_created_emp <>", value, "confCreatedEmp");
            return (Criteria) this;
        }

        public Criteria andConfCreatedEmpGreaterThan(String value) {
            addCriterion("conf_created_emp >", value, "confCreatedEmp");
            return (Criteria) this;
        }

        public Criteria andConfCreatedEmpGreaterThanOrEqualTo(String value) {
            addCriterion("conf_created_emp >=", value, "confCreatedEmp");
            return (Criteria) this;
        }

        public Criteria andConfCreatedEmpLessThan(String value) {
            addCriterion("conf_created_emp <", value, "confCreatedEmp");
            return (Criteria) this;
        }

        public Criteria andConfCreatedEmpLessThanOrEqualTo(String value) {
            addCriterion("conf_created_emp <=", value, "confCreatedEmp");
            return (Criteria) this;
        }

        public Criteria andConfCreatedEmpLike(String value) {
            addCriterion("conf_created_emp like", value, "confCreatedEmp");
            return (Criteria) this;
        }

        public Criteria andConfCreatedEmpNotLike(String value) {
            addCriterion("conf_created_emp not like", value, "confCreatedEmp");
            return (Criteria) this;
        }

        public Criteria andConfCreatedEmpIn(List<String> values) {
            addCriterion("conf_created_emp in", values, "confCreatedEmp");
            return (Criteria) this;
        }

        public Criteria andConfCreatedEmpNotIn(List<String> values) {
            addCriterion("conf_created_emp not in", values, "confCreatedEmp");
            return (Criteria) this;
        }

        public Criteria andConfCreatedEmpBetween(String value1, String value2) {
            addCriterion("conf_created_emp between", value1, value2, "confCreatedEmp");
            return (Criteria) this;
        }

        public Criteria andConfCreatedEmpNotBetween(String value1, String value2) {
            addCriterion("conf_created_emp not between", value1, value2, "confCreatedEmp");
            return (Criteria) this;
        }

        public Criteria andConfLastEmpIsNull() {
            addCriterion("conf_last_emp is null");
            return (Criteria) this;
        }

        public Criteria andConfLastEmpIsNotNull() {
            addCriterion("conf_last_emp is not null");
            return (Criteria) this;
        }

        public Criteria andConfLastEmpEqualTo(String value) {
            addCriterion("conf_last_emp =", value, "confLastEmp");
            return (Criteria) this;
        }

        public Criteria andConfLastEmpNotEqualTo(String value) {
            addCriterion("conf_last_emp <>", value, "confLastEmp");
            return (Criteria) this;
        }

        public Criteria andConfLastEmpGreaterThan(String value) {
            addCriterion("conf_last_emp >", value, "confLastEmp");
            return (Criteria) this;
        }

        public Criteria andConfLastEmpGreaterThanOrEqualTo(String value) {
            addCriterion("conf_last_emp >=", value, "confLastEmp");
            return (Criteria) this;
        }

        public Criteria andConfLastEmpLessThan(String value) {
            addCriterion("conf_last_emp <", value, "confLastEmp");
            return (Criteria) this;
        }

        public Criteria andConfLastEmpLessThanOrEqualTo(String value) {
            addCriterion("conf_last_emp <=", value, "confLastEmp");
            return (Criteria) this;
        }

        public Criteria andConfLastEmpLike(String value) {
            addCriterion("conf_last_emp like", value, "confLastEmp");
            return (Criteria) this;
        }

        public Criteria andConfLastEmpNotLike(String value) {
            addCriterion("conf_last_emp not like", value, "confLastEmp");
            return (Criteria) this;
        }

        public Criteria andConfLastEmpIn(List<String> values) {
            addCriterion("conf_last_emp in", values, "confLastEmp");
            return (Criteria) this;
        }

        public Criteria andConfLastEmpNotIn(List<String> values) {
            addCriterion("conf_last_emp not in", values, "confLastEmp");
            return (Criteria) this;
        }

        public Criteria andConfLastEmpBetween(String value1, String value2) {
            addCriterion("conf_last_emp between", value1, value2, "confLastEmp");
            return (Criteria) this;
        }

        public Criteria andConfLastEmpNotBetween(String value1, String value2) {
            addCriterion("conf_last_emp not between", value1, value2, "confLastEmp");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}