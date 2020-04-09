const express = require('express');
const router = express.Router();
const http = require('http');
var mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret_key = process.env.SECRET_KEY || "prew";


var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "desarrollo",
    database: 'intae',
    insecureAuth: true,
    multipleStatements: true
});



router.get('/get_usuarios', (req, res, next) => {
    var query = 'select * from usuarios';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.get('/get_usuario', (req, res, next) => {
    var query = 'select * from usuarios where codigo = ?';
    var values = [req.query.codigo];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});




router.post('/insert_usuario', (req, res, next) => {
    var user = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        usuario: req.body.usuario,
        pass: req.body.pass,
        correo: req.body.correo,
    };

    const create_user = (user) =>{
        var query = 'INSERT INTO `usuarios` (`nombre`, `apellido`, `usuario`, `pass`, `correo`) VALUES (?)';
        con.query(query, [Object.values(user)], (err, result, fields) => {
            if(err) {
                console.log(err);
                res.status(500).send();
            } else {
                res.status(200).send();
            }
        });
    };
    bcrypt.hash(user.pass,10).then((hashedPassword) => {
        user.pass = hashedPassword;
        create_user(user);
    });
});


router.post('/login',(req,res,next) =>{
    var user = {
        usuario: req.body.usuario,
        pass: req.body.pass
    };
    const get_token = (user) =>{
        var query = "SELECT `usuario`, `pass` FROM `usuarios` where `usuario` = ?  ";
        con.query(query, [user.usuario], (err,result,fields) =>{
            if(err || result.length == 0){
                console.log(err);
                res.status(400).json({message:"Usuario o Contraseña Incorrectos"});
            }else{
                bcrypt.compare(user.pass,result[0].pass, (error, isMatch) =>{
                    if(isMatch){
                        var token = jwt.sign({userId: result[0].usuario}, secret_key);
                        res.status(200).json({token});
                    }else if(error){
                        res.status(400).json(error);
                    }else{
                        res.status(400).json({message: "Usuario o Contraseña Incorrectos"});
                    }
                });
            }
        });
    }
    get_token(user);
});


router.put('/update_usuario', (req, res, next) => {
    var query = 'update usuarios set nombre = ?, apellido = ?, usuario = ?, pass = ?, correo = ? where codigo = ?';
    var values = [req.body.nombre,
                req.body.apellido,
                req.body.usuario,
                req.body.pass,
                req.body.correo,
                req.body.codigo];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.delete('/delete_usuario', (req, res, next) => {
    var query = 'delete from usuarios where codigo = ?';
    var values = [req.query.codigo];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.get('/get_secciones', (req, res, next) => {
    var query = 'select * from seccion';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.post('/insert_aspectospersonales', (req, res, next) => {
    var query = 'INSERT INTO `aspectos personales` (`codigo_convive`,`obs_residencias`, `cod_relaciones_sociales`, `cod_relaciones_amistosas`, `obs_relaciones_amistosas`, `obs_noviazgos`, `cod_mejor_amigo`, `obs_mejor_amigo`, `cod_act_deportiva`, `obs_actividades_deportivas`, `cod_act_artistica`, `obs_actividades_artisticas`, `obs_religion`, `cod_problema_emocional`, `obs_ayudas`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    var values = [req.body.codigo_convive,
                    req.body.obs_residencias,
                    req.body.cod_relaciones_sociales,
                    req.body.cod_relaciones_amistosas,
                    req.body.obs_relaciones_amistosas,
                    req.body.obs_noviazgos,
                    req.body.cod_mejor_amigo,
                    req.body.obs_mejor_amigo,
                    req.body.cod_act_deportiva,
                    req.body.obs_actividades_deportivas,
                    req.body.cod_act_artistica,
                    req.body.obs_actividades_artisticas,
                    req.body.obs_religion,
                    req.body.cod_problema_emocional,
                    req.body.obs_ayudas];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.delete('/delete_aspectospersonales', (req, res, next) => {
    var query = 'delete from `aspectos personales` where `cod_aspectos_personal` = ?';
    var values = [req.query.cod_aspectos_personal];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.put('/update_aspectospersonales', (req, res, next) => {
    var query = 'UPDATE `aspectos personales` SET `codigo_convive` = ?, `obs_residencias` = ?, `cod_relaciones_sociales` = ?, `cod_relaciones_amistosas` = ?, `obs_relaciones_amistosas` = ?, `obs_noviazgos` = ?, `cod_mejor_amigo` = ?, `obs_mejor_amigo` = ?, `cod_act_deportiva` = ?, `obs_actividades_deportivas` = ?, `cod_act_artistica` = ?, `obs_actividades_artisticas` = ?,  `obs_religion` = ?, `cod_problema_emocional` = ?, `obs_ayudas` = ? WHERE `cod_aspectos_personal` = ?';
    var values = [req.body.codigo_convive,
                    req.body.obs_residencias,
                    req.body.cod_relaciones_sociales,
                    req.body.cod_relaciones_amistosas,
                    req.body.obs_relaciones_amistosas,
                    req.body.obs_noviazgos,
                    req.body.cod_mejor_amigo,
                    req.body.obs_mejor_amigo,
                    req.body.cod_act_deportiva,
                    req.body.obs_actividades_deportivas,
                    req.body.cod_act_artistica,
                    req.body.obs_actividades_artisticas,
                    req.body.obs_religion,
                    req.body.cod_problema_emocional,
                    req.body.obs_ayudas,
                    req.body.cod_aspectos_personal];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.get('/get_aspectospersonales', (req, res, next) => {
    var query = 'select `aspectos personales`.`cod_aspectos_personal` as `cod_aspectos_personal`,`convive`.`descripcion` as `descripcion_convive`,`aspectos personales`.`obs_residencias` as `obs_residencias`,`relaciones sociales`.`descripcion` as `descripcion_social`,`relaciones amistosas`.`descripcion` as `descripcion_amistosa`,`aspectos personales`.`obs_relaciones_amistosas` as `obs_relaciones_amistosas`,`aspectos personales`.`obs_noviazgos` as `obs_noviazgos`,`mejores_amigos`.`descripcion` as `descripcion_mejor`, `aspectos personales`.`obs_mejor_amigo` as `obs_mejor_amigo`,`actividades_deportivas`.`descripcion` as `descripcion_deportiva`,`aspectos personales`.`obs_actividades_deportivas` as `obs_actividades_deportivas`,`actividades_artisticas`.`descripcion` as `descripcion_artistica`,`aspectos personales`.`obs_actividades_artisticas` as `obs_actividades_artisticas`,`aspectos personales`.`obs_religion` as `obs_religion`,`problemas emocionales`.`descripcion` as `descripcion_emocional`,`aspectos personales`.`obs_ayudas` as `obs_ayudas`,`convive`.`codigo_convive` as `codigo_convive`,`relaciones sociales`.`cod_relaciones_sociales` as `cod_relaciones_sociales`, `relaciones amistosas`.`cod_relaciones_amistosas` as `cod_relaciones_amistosas`, `mejores_amigos`.`cod_mejor_amigo` as `cod_mejor_amigo`, `actividades_deportivas`.`cod_act_deportiva` as `cod_act_deportiva`,`actividades_artisticas`.`cod_act_artistica` as `cod_act_artistica`, `problemas emocionales`.`cod_problema_emocional` as `cod_problema_emocional` from `aspectos personales` join `convive` on `aspectos personales`.`codigo_convive` = `convive`.`codigo_convive`  join `relaciones sociales` on `aspectos personales`.`cod_relaciones_sociales` = `relaciones sociales`.`cod_relaciones_sociales` join `relaciones amistosas` on `aspectos personales`.`cod_relaciones_amistosas` = `relaciones amistosas`.`cod_relaciones_amistosas` join `mejores_amigos` on `aspectos personales`.`cod_mejor_amigo` = `mejores_amigos`.`cod_mejor_amigo` join `actividades_deportivas` on `aspectos personales`.`cod_act_deportiva` = `actividades_deportivas`.`cod_act_deportiva` join `actividades_artisticas` on `aspectos personales`.`cod_act_artistica` = `actividades_artisticas`.`cod_act_artistica` join `problemas emocionales` on `aspectos personales`.`cod_problema_emocional` = `problemas emocionales`.`cod_problema_emocional` order by `aspectos personales`.`cod_aspectos_personal`';
    con.query(query, (err, result, fields) => { 
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.post('/insert_aspectospedagogicos', (req, res, next) => {
    var query = 'INSERT INTO `aspectos pedagogicos` (`motivos`, `sexto_grado_cursado`, `ubicacion_centro_anterior`, `codigo_escuela`, `codigo_rendimiento`, `cod_asignatura_dificultad`, `cod_asignatura_facilidad`, `codigo_estudio`, `cod_consideracion`, `obs_reportes`, `obs_expulsion`, `obs_reprobado`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';
    var values = [req.body.motivos,
                req.body.sexto_grado_cursado,
                req.body.ubicacion_centro_anterior,
                req.body.codigo_escuela,
                req.body.codigo_rendimiento,
                req.body.cod_asignatura_dificultad,
                req.body.cod_asignatura_facilidad,
                req.body.codigo_estudio,
                req.body.cod_consideracion,
                req.body.obs_reportes,
                req.body.obs_expulsion,
                req.body.obs_reprobado];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.put('/update_aspectospedagogicos', (req, res, next) => {
    var query = 'UPDATE `aspectos pedagogicos` SET `motivos` = ?, `sexto_grado_cursado` = ?, `ubicacion_centro_anterior` = ?, `codigo_escuela` = ?, `codigo_rendimiento` = ?, `cod_asignatura_dificultad` = ?, `cod_asignatura_facilidad` = ?, `codigo_estudio` = ?, `cod_consideracion` = ?, `obs_reportes` = ?, `obs_expulsion` = ?, `obs_reprobado` = ?  WHERE `codigo_pedagogicos` = ?';
    var values = [req.body.motivos,
                req.body.sexto_grado_cursado,
                req.body.ubicacion_centro_anterior,
                req.body.codigo_escuela,
                req.body.codigo_rendimiento,
                req.body.cod_asignatura_dificultad,
                req.body.cod_asignatura_facilidad,
                req.body.codigo_estudio,
                req.body.cod_consideracion,
                req.body.obs_reportes,
                req.body.obs_expulsion,
                req.body.obs_reprobado,
                req.body.codigo_pedagogicos];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.delete('/delete_aspectospedagogicos', (req, res, next) => {
    var query = 'delete from `aspectos pedagogicos` where codigo_pedagogicos = ?';
    var values = [req.query.codigo_pedagogicos];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.get('/get_aspectospedagogicos', (req, res, next) => {
    var query = 'select `aspectos pedagogicos`.`codigo_pedagogicos` as `codigo_pedagogicos`, `aspectos pedagogicos`.`motivos` as `motivos`, `aspectos pedagogicos`.`sexto_grado_cursado` as `sexto_grado_cursado`, `aspectos pedagogicos`.`ubicacion_centro_anterior` as `ubicacion_centro_anterior`,`tipo escuela`.`descripcion` as `descripcion`, `rendimiento academico`.`descripcion` as `descripcion_rendimiento`, `asignatura dificultad`.`descripcion` as `descripcion_dificil`, `asignatura facilidad`.`descripcion` as `descripcion_facil`, `estudio constante`.`descripcion` as `descripcion_estudio`,`consideracion estudio`.`descripcion` as `descripcion_consideracion`,`aspectos pedagogicos`.`obs_reprobado` as `obs_reprobado`, `aspectos pedagogicos`.`obs_reportes` as `obs_reportes`,`aspectos pedagogicos`.`obs_expulsion` as `obs_expulsion`, `tipo escuela`.`codigo_escuela` as `codigo_escuela`, `asignatura dificultad`.`cod_asignatura_dificultad` as `cod_asignatura_dificultad`, `asignatura facilidad`.`cod_asignatura_facilidad` as `cod_asignatura_facilidad`, `rendimiento academico`.`codigo_rendimiento` as `codigo_rendimiento`, `estudio constante`.`codigo_estudio` as `codigo_estudio`, `consideracion estudio`.`cod_consideracion` as `cod_consideracion` from `aspectos pedagogicos` join `tipo escuela` on `aspectos pedagogicos`.`codigo_escuela` = `tipo escuela`.`codigo_escuela` join `rendimiento academico` on `aspectos pedagogicos`.`codigo_rendimiento` = `rendimiento academico`.`codigo_rendimiento` join `asignatura dificultad` on `aspectos pedagogicos`.`cod_asignatura_dificultad` = `asignatura dificultad`.`cod_asignatura_dificultad` join `asignatura facilidad` on `aspectos pedagogicos`.`cod_asignatura_facilidad` = `asignatura facilidad`.`cod_asignatura_facilidad` join `estudio constante` on `aspectos pedagogicos`.`codigo_estudio` = `estudio constante`.`codigo_estudio` join `consideracion estudio` on `aspectos pedagogicos`.`cod_consideracion` = `consideracion estudio`.`cod_consideracion` order by `aspectos pedagogicos`.`codigo_pedagogicos`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.get('/get_ficha', (req, res, next) => {
    var query = 'select `ficha`.`num_ficha` as `num_ficha`, `curso`.`desc_curso` as `desc_curso`, `seccion`.`desc_seccion` as `desc_seccion`, `modalidad`.`desc_modadlidad` as `desc_modadlidad`, `jornada`.`desc_jornada` as `desc_jornada`,`ciudad`.`nom_ciudad` as `nom_ciudad`, `ficha`.`anio` as `anio`, `ficha`.`obs_inst_proced` as `obs_inst_proced`, `ficha`.`indice_acad` as `indice_acad`, `ficha`.`obs_repite_curso` as `obs_repite_curso`, `ficha`.`obs_materia_restrada` as `obs_materia_restrada`, `ficha`.`obs_beca` as `obs_beca`, `ficha`.`contacto_emergencia` as `contacto_emergencia`, `ficha`.`num_emergencia` as `num_emergencia`, `ficha`.`observaciones` as `observaciones`,`curso`.`cod_curso` as `cod_curso`, `seccion`.`cod_seccion` as `cod_seccion`, `modalidad`.`cod_modalidad` as `cod_modalidad`, `jornada`.`cod_jornada` as `cod_jornada`, `ciudad`.`cod_ciudad` as `cod_ciudad`  from `ficha` join `seccion` on `ficha`.`cod_seccion` = `seccion`.`cod_seccion` join `curso` on `ficha`.`cod_curso` = `curso`.`cod_curso` join `modalidad` on `ficha`.`cod_modalidad` = `modalidad`.`cod_modalidad` join `jornada` on `ficha`.`cod_jornada` = `jornada`.`cod_jornada` join `ciudad` on `ficha`.`cod_ciudad` = `ciudad`.`cod_ciudad` order by `ficha`.`num_ficha`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

    router.post('/insert_ficha', (req, res, next) => {
            var query = 'insert into ficha (cod_curso,cod_seccion,cod_modalidad,cod_jornada,cod_ciudad,anio,obs_inst_proced,indice_acad,obs_repite_curso,obs_materia_restrada,obs_beca,contacto_emergencia,num_emergencia,observaciones) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
            var values = [req.body.cod_curso,
                            req.body.cod_seccion,
                            req.body.cod_modalidad,
                            req.body.cod_jornada,
                            req.body.cod_ciudad,
                            req.body.anio,
                            req.body.obs_inst_proced,
                            req.body.indice_acad,
                            req.body.obs_repite_curso,
                            req.body.obs_materia_restrada,
                            req.body.obs_beca,
                            req.body.contacto_emergencia,
                            req.body.num_emergencia,
                            req.body.observaciones];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                    next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });

router.put('/update_ficha', (req, res, next) => {
            var query = 'update ficha set cod_curso=?,cod_seccion=?,cod_modalidad=?,cod_jornada=?,cod_ciudad=?,anio=?,obs_inst_proced=?,indice_acad=?,obs_repite_curso=?,obs_materia_restrada=?,obs_beca=?,contacto_emergencia=?,num_emergencia=?,observaciones=? where num_ficha=?';
            var values = [req.body.cod_curso,
                            req.body.cod_seccion,
                            req.body.cod_modalidad,
                            req.body.cod_jornada,
                            req.body.cod_ciudad,
                            req.body.anio,
                            req.body.obs_inst_proced,
                            req.body.indice_acad,
                            req.body.obs_repite_curso,
                            req.body.obs_materia_restrada,
                            req.body.obs_beca,
                            req.body.contacto_emergencia,
                            req.body.num_emergencia,
                            req.body.observaciones,
                            req.body.num_ficha];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                    next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });

router.delete('/delete_ficha', (req, res, next) => {
        var query = 'delete from ficha where num_ficha=?';
        var values = [req.query.num_ficha];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });


router.get('/get_ciudad', (req, res, next) => {
        var query = 'SELECT * FROM ciudad';
        con.query(query, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_ciudad', (req, res, next) => {
        var query = 'insert into ciudad (nom_ciudad) values(?)';
        var values = [req.body.nom_ciudad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.put('/update_ciudad', (req, res, next) => {
        var query = 'update ciudad set nom_ciudad=? where cod_ciudad=?';
        var values = [req.body.nom_ciudad,
                        req.body.cod_ciudad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_ciudad', (req, res, next) => {
        var query = 'delete from ciudad where cod_ciudad=?';
        var values = [req.query.cod_ciudad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });



    
router.get('/get_cursos', (req, res, next) => {
    var query = 'SELECT * FROM curso';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.post('/insert_curso', (req, res, next) => {
    var query = 'insert into curso (desc_curso) values(?)';
    var values = [req.body.desc_curso];
    con.query(query, values, (err, result, fields) => {
        if(err) {
           next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.put('/update_curso', (req, res, next) => {
    var query = 'update curso set desc_curso=? where cod_curso=?';
    var values = [req.body.desc_curso,
                    req.body.cod_curso];
    con.query(query, values, (err, result, fields) => {
        if(err) {
           next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.delete('/delete_curso', (req, res, next) => {
    var query = 'delete from curso where cod_curso=?';
    var values = [req.query.cod_curso];
    con.query(query, values, (err, result, fields) => {
        if(err) {
           next(err);
        } else {
            res.status(200).json(result);
        }
    });
});
router.get('/get_documentos', (req, res, next) => {
    var query = 'SELECT * FROM documentos';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.post('/insert_documentos', (req, res, next) => {
        var query = 'insert into documentos (descrip_doc) values(?)';
        var values = [req.body.descrip_doc];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.put('/update_documentos', (req, res, next) => {
        var query = 'update documentos set descrip_doc = ? where tipo_documento = ?';
        var values = [req.body.descrip_doc,
                        req.body.tipo_documento];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_documentos', (req, res, next) => {
        var query = 'delete from documentos where tipo_documento=?';
        var values = [req.query.tipo_documento];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_jornada', (req, res, next) => {
    var query = 'SELECT * FROM jornada';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.post('/insert_jornada', (req, res, next) => {
        var query = 'insert into jornada (desc_jornada) values(?)';
        var values = [req.body.desc_jornada];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

    router.put('/update_jornada', (req, res, next) => {
        var query = 'update jornada set desc_jornada = ? where cod_jornada = ?';
        var values = [req.body.desc_jornada,
                        req.body.cod_jornada];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_jornada', (req, res, next) => {
        var query = 'delete from jornada where cod_jornada=?';
        var values = [req.query.cod_jornada];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_seccion', (req, res, next) => {
    var query = 'SELECT * FROM seccion';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.post('/insert_seccion', (req, res, next) => {
        var query = 'insert into seccion (desc_seccion) values(?)';
        var values = [req.body.desc_seccion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.put('/update_seccion', (req, res, next) => {
        var query = 'update seccion set desc_seccion = ? where cod_seccion = ?';
        var values = [req.body.desc_seccion,
                        req.body.cod_seccion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_seccion', (req, res, next) => {
        var query = 'delete from seccion where cod_seccion=?';
        var values = [req.query.cod_seccion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_modalidad', (req, res, next) => {
    var query = 'SELECT * FROM modalidad';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.post('/insert_modalidad', (req, res, next) => {
        var query = 'insert into modalidad (desc_modadlidad) values(?)';
        var values = [req.body.desc_modadlidad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.put('/update_modalidad', (req, res, next) => {
        var query = 'update modalidad set desc_modadlidad = ? where cod_modalidad = ?';
        var values = [req.body.desc_modadlidad,
                        req.body.cod_modalidad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_modalidad', (req, res, next) => {
        var query = 'delete from modalidad where cod_modalidad=?';
        var values = [req.query.cod_modalidad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

    router.get('/get_tipoescuela', (req, res, next) => {
        var query = 'SELECT * FROM `tipo escuela`';
        con.query(query, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });
    
    router.post('/insert_tipoescuela', (req, res, next) => {
            var query = 'insert into `tipo escuela` (descripcion) values(?)';
            var values = [req.body.descripcion];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                    next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });
    
    router.put('/update_tipoescuela', (req, res, next) => {
            var query = 'update `tipo escuela` set `descripcion` = ? where `codigo_escuela` = ?';
            var values = [req.body.descripcion,
                            req.body.codigo_escuela];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                   next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });
    
    router.delete('/delete_tipoescuela', (req, res, next) => {
            var query = 'delete from `tipo escuela` where codigo_escuela=?';
            var values = [req.query.codigo_escuela];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                   next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });

router.post('/insert_deporte', (req, res, next) => {
        var query = 'INSERT INTO `actividades_deportivas` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_deporte', (req, res, next) => {
    var query = 'select * from `actividades_deportivas`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_deporte', (req, res, next) => {
        var query = 'UPDATE `actividades_deportivas` SET `descripcion` = ? WHERE (`cod_act_deportiva` = ?)';
        var values = [req.body.descripcion,
                        req.body.cod_act_deportiva];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_deporte', (req, res, next) => {
        var query = 'DELETE FROM `actividades_deportivas` WHERE (`cod_act_deportiva` = ?)';
        var values = [req.query.cod_act_deportiva];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });


router.get('/get_arte', (req, res, next) => {
    var query = 'select * from `actividades_artisticas`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_arte', (req, res, next) => {
        var query = 'UPDATE `actividades_artisticas` SET `descripcion` = ? WHERE (`cod_act_artistica` = ?)';
        var values = [req.body.descripcion,
                        req.body.cod_act_artistica];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_arte', (req, res, next) => {
        var query = 'DELETE FROM `actividades_artisticas` WHERE (`cod_act_artistica` = ?)';
        var values = [req.query.cod_act_artistica];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_arte', (req, res, next) => {
        var query = 'INSERT INTO `actividades_artisticas` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });


router.get('/get_relacionsocial', (req, res, next) => {
    var query = 'select * from `relaciones sociales`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_relacionsocial', (req, res, next) => {
        var query = 'UPDATE `relaciones sociales` SET `descripcion` = ? WHERE (`cod_relaciones_sociales` = ?)';
        var values = [req.body.descripcion,
                        req.body.cod_relaciones_sociales];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_relacionsocial', (req, res, next) => {
        var query = 'DELETE FROM `relaciones sociales` WHERE (`cod_relaciones_sociales` = ?)';
        var values = [req.query.cod_relaciones_sociales];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_relacionsocial', (req, res, next) => {
        var query = 'INSERT INTO `relaciones sociales` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_relacionamistosa', (req, res, next) => {
    var query = 'select * from `relaciones amistosas`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_relacionamistosa', (req, res, next) => {
        var query = 'UPDATE `relaciones amistosas` SET `descripcion` = ? WHERE `cod_relaciones_amistosas` = ?';
        var values = [req.body.descripcion,
                        req.body.cod_relaciones_amistosas];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_relacionamistosa', (req, res, next) => {
        var query = 'DELETE FROM `relaciones amistosas` WHERE `cod_relaciones_amistosas` = ?';
        var values = [req.query.cod_relaciones_amistosas];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_relacionamistosa', (req, res, next) => {
        var query = 'INSERT INTO `relaciones amistosas` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });


router.get('/get_problemaemocional', (req, res, next) => {
    var query = 'select * from `problemas emocionales`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_problemaemocional', (req, res, next) => {
        var query = 'UPDATE `problemas emocionales` SET `descripcion` = ? WHERE `cod_problema_emocional` = ?';
        var values = [req.body.descripcion,
                        req.body.cod_problema_emocional];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_problemaemocional', (req, res, next) => {
        var query = 'DELETE FROM `problemas emocionales` WHERE `cod_problema_emocional` = ?';
        var values = [req.query.cod_problema_emocional];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_problemaemocional', (req, res, next) => {
        var query = 'INSERT INTO `problemas emocionales` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_mejoramigo', (req, res, next) => {
    var query = 'select * from `mejores_amigos`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_mejoramigo', (req, res, next) => {
        var query = 'UPDATE `mejores_amigos` SET `descripcion` = ? WHERE `cod_mejor_amigo` = ?';
        var values = [req.body.descripcion,
                        req.body.cod_mejor_amigo];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_mejoramigo', (req, res, next) => {
        var query = 'DELETE FROM `mejores_amigos` WHERE `cod_mejor_amigo` = ?';
        var values = [req.query.cod_mejor_amigo];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_mejoramigo', (req, res, next) => {
        var query = 'INSERT INTO `mejores_amigos` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });


router.get('/get_asignaturadificultad', (req, res, next) => {
    var query = 'select * from `asignatura dificultad`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_asignaturadificultad', (req, res, next) => {
        var query = 'UPDATE `asignatura dificultad` SET `descripcion` = ? WHERE `cod_asignatura_dificultad` = ?';
        var values = [req.body.descripcion,
                        req.body.cod_asignatura_dificultad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_asignaturadificultad', (req, res, next) => {
        var query = 'DELETE FROM `asignatura dificultad` WHERE `cod_asignatura_dificultad` = ?';
        var values = [req.query.cod_asignatura_dificultad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_asignaturadificultad', (req, res, next) => {
        var query = 'INSERT INTO `asignatura dificultad` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });


router.get('/get_asignaturafacilidad', (req, res, next) => {
    var query = 'select * from `asignatura facilidad`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_asignaturafacilidad', (req, res, next) => {
        var query = 'UPDATE `asignatura facilidad` SET `descripcion` = ? WHERE `cod_asignatura_facilidad` = ?';
        var values = [req.body.descripcion,
                        req.body.cod_asignatura_facilidad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_asignaturafacilidad', (req, res, next) => {
        var query = 'DELETE FROM `asignatura facilidad` WHERE `cod_asignatura_facilidad` = ?';
        var values = [req.query.cod_asignatura_facilidad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_asignaturafacilidad', (req, res, next) => {
        var query = 'INSERT INTO `asignatura facilidad` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_rendimientoacademico', (req, res, next) => {
    var query = 'select * from `rendimiento academico`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_rendimientoacademico', (req, res, next) => {
        var query = 'UPDATE `rendimiento academico` SET `descripcion` = ? WHERE `codigo_rendimiento` = ?';
        var values = [req.body.descripcion,
                        req.body.codigo_rendimiento];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_rendimientoacademico', (req, res, next) => {
        var query = 'DELETE FROM `rendimiento academico` WHERE `codigo_rendimiento` = ?';
        var values = [req.query.codigo_rendimiento];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_rendimientoacademico', (req, res, next) => {
        var query = 'INSERT INTO `rendimiento academico` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_consideracion', (req, res, next) => {
    var query = 'select * from `consideracion estudio`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_consideracion', (req, res, next) => {
        var query = 'UPDATE `consideracion estudio` SET `descripcion` = ? WHERE `cod_consideracion` = ?';
        var values = [req.body.descripcion,
                        req.body.cod_consideracion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_consideracion', (req, res, next) => {
        var query = 'DELETE FROM `consideracion estudio` WHERE `cod_consideracion` = ?';
        var values = [req.query.cod_consideracion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_consideracion', (req, res, next) => {
        var query = 'INSERT INTO `consideracion estudio` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });


router.get('/get_estudioconstante', (req, res, next) => {
    var query = 'select * from `estudio constante`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_estudioconstante', (req, res, next) => {
        var query = 'UPDATE `estudio constante` SET `descripcion` = ? WHERE `codigo_estudio` = ?';
        var values = [req.body.descripcion,
                        req.body.codigo_estudio];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_estudioconstante', (req, res, next) => {
        var query = 'DELETE FROM `estudio constante` WHERE `codigo_estudio` = ?';
        var values = [req.query.codigo_estudio];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_estudioconstante', (req, res, next) => {
        var query = 'INSERT INTO `estudio constante` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_estudioconstante', (req, res, next) => {
    var query = 'select * from `estudio constante`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_estudioconstante', (req, res, next) => {
        var query = 'UPDATE `estudio constante` SET `descripcion` = ? WHERE `codigo_estudio` = ?';
        var values = [req.body.descripcion,
                        req.body.codigo_estudio];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_estudioconstante', (req, res, next) => {
        var query = 'DELETE FROM `estudio constante` WHERE `codigo_estudio` = ?';
        var values = [req.query.codigo_estudio];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_estudioconstante', (req, res, next) => {
        var query = 'INSERT INTO `estudio constante` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

    router.get('/get_transtornos', (req, res, next) => {
        var query = 'select * from `transtornos`';
        con.query(query, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });
    
    
    router.put('/update_transtornos', (req, res, next) => {
            var query = 'UPDATE `transtornos` SET `descripcion` = ? WHERE `codigo_trans` = ?';
            var values = [req.body.descripcion,
                            req.body.codigo_trans];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                   next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });
    
    router.delete('/delete_transtornos', (req, res, next) => {
            var query = 'DELETE FROM `transtornos` WHERE `codigo_trans` = ?';
            var values = [req.query.codigo_trans];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                   next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });
    
    router.post('/insert_transtornos', (req, res, next) => {
            var query = 'INSERT INTO `transtornos` (`descripcion`) VALUES (?)';
            var values = [req.body.descripcion];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                    next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });


router.get('/get_fichacompleta', (req, res, next) => {
    var query = 'select concat_ws(" ",`alumnos datos`.`nombre_alumno`,`alumnos datos`.`segundo_nombre`,`alumnos datos`.`apellido_alumno`,`alumnos datos`.`segundo_apellido`) as `nombre_completo`, `alumnos datos`.`id_alumno` as `id_alumno`, `ciudad`.`nom_ciudad` as `ciudad_nacimiento`, `alumnos datos`.`fecha_nacimiento` as `fecha_nacimiento`, DATE_FORMAT(FROM_DAYS(DATEDIFF(now(),`alumnos datos`.`fecha_nacimiento`)), "%Y")+0 AS `edad`, `alumnos datos`.`sexo` as `sexo`, `curso`.`desc_curso` as `desc_curso`,`seccion`.`desc_seccion` as `desc_seccion`, `modalidad`.`desc_modadlidad` as `desc_modadlidad`, `jornada`.`desc_jornada` as `desc_jornada`, `ficha`.`anio` as `anio`, concat_ws(" ", `alumnos datos`.`nombre_padre`,"," , `alumnos datos`.`nombre_madre`) as `encargados`, `alumnos datos`.`residencia_actual` as `residencia_actual`, `alumnos datos`.`tel_celular` as `tel_celular`, `alumnos datos`.`tel_casa` as `tel_casa`, `alumnos datos`.`tel_trabajo` as `tel_trabajo`, `alumnos datos`.`correo` as `correo`, `convive`.`descripcion` as `descripcion_convive`, `ficha`.`obs_inst_proced` as `obs_inst_proced`,`ficha`.`indice_acad` as `indice_acad`, `ficha`.`obs_repite_curso` as `obs_repite_curso`, `ficha`.`obs_materia_restrada` as `obs_materia_restrada`,  `ficha`.`obs_beca` as `obs_beca`, `ficha`.`contacto_emergencia` as `contacto_emergencia`, `ficha`.`num_emergencia` as `num_emergencia`, `aspectos pedagogicos`.`motivos` as `motivos`, `ficha`.`observaciones` as `observaciones`, `alumnos datos`.`codigo_ficha` as `num_ficha` from `alumnos datos` join `ficha` on `alumnos datos`.`codigo_ficha` = `ficha`.`num_ficha` join `ciudad` on `ficha`.`cod_ciudad` = `ciudad`.`cod_ciudad` join `curso` on `ficha`.`cod_curso` = `curso`.`cod_curso` join `seccion` on `ficha`.`cod_seccion` = `seccion`.`cod_seccion` join `modalidad` on `ficha`.`cod_modalidad` = `modalidad`.`cod_modalidad` join `jornada` on `ficha`.`cod_jornada` = `jornada`.`cod_jornada` join `aspectos personales` on `alumnos datos`.`cod_aspectos_personal` = `aspectos personales`.`cod_aspectos_personal` join `aspectos pedagogicos` on `alumnos datos`.`aspectos_pedagogicos` = `aspectos pedagogicos`.`codigo_pedagogicos` join `convive` on `aspectos personales`.`codigo_convive` = `convive`.`codigo_convive` where `id_alumno`=?';
    var values = [req.query.id_alumno];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.get('/get_registrocompleto', (req, res, next) => {
    var query = 'select concat_ws(" ",`alumnos datos`.`nombre_alumno`,`alumnos datos`.`segundo_nombre`,`alumnos datos`.`apellido_alumno`,`alumnos datos`.`segundo_apellido`) as `nombre_completo`, `alumnos datos`.`nacionalidad` as `nacionalidad`,  `alumnos datos`.`lugar_procedencia` as `lugar_procedencia`, `alumnos datos`.`residencial_actual_alumno` as `residencia_actual_alumno`, `expedientes`.`fecha_expediente` as `fecha_expediente`, `alumnos datos`.`nombre_padre` as `nombre_padre`, `alumnos datos`.`tel_padre` as `tel_padre`, `alumnos datos`.`ocupacion_padre` as `ocupacion_padre`, `alumnos datos`.`nombre_madre` as `nombre_madre`, `alumnos datos`.`tel_madre` as `tel_madre`, `alumnos datos`.`ocupacion_madre` as `ocupacion_madre`, `aspectos pedagogicos`.`motivos` as `motivos`, `aspectos pedagogicos`.`sexto_grado_cursado` as `sexto_grado_cursado`, `aspectos pedagogicos`.`ubicacion_centro_anterior` as `ubicacion_centro_anterior`, `tipo escuela`.`descripcion` as `descripcion_escuela`, `rendimiento academico`.`descripcion` as `descripcion_rendimiento`, `asignatura dificultad`.`descripcion` as `descripcion_dificultad`,  `asignatura facilidad`.`descripcion` as `descripcion_facilidad`, `estudio constante`.`descripcion` as `descripcion_estudio`, `consideracion estudio`.`descripcion` as `descripcion_consideracion`, `aspectos pedagogicos`.`obs_reprobado` as `obs_reprobado`, `aspectos pedagogicos`.`obs_reportes` as `obs_reportes`,`aspectos pedagogicos`.`obs_expulsion` as `obs_expulsion` , `convive`.`descripcion` as `descripcion_convive`, `aspectos personales`.`obs_residencias` as `obs_residencias`, `relaciones sociales`.`descripcion` as `descripcion_social`,`aspectos personales`.`obs_noviazgos` as `obs_noviazgos`, `relaciones amistosas`.`descripcion` as `descripcion_amistad`, `aspectos personales`.`obs_relaciones_amistosas` as `obs_relaciones_amistosas`, `mejores_amigos`.`descripcion` as `descripcion_amigo`,`aspectos personales`.`obs_mejor_amigo` as `obs_mejor_amigo`,`actividades_deportivas`.`descripcion` as `descripcion_deporte`, `aspectos personales`.`obs_actividades_deportivas` as `obs_actividades_deportivas`, `actividades_artisticas`.`descripcion` as `descripcion_arte`, `aspectos personales`.`obs_actividades_artisticas`, `aspectos personales`.`obs_religion` as `obs_religion`, `problemas emocionales`.`descripcion` as `descripcion_problema`, `aspectos personales`.`obs_ayudas` as `obs_ayudas`,`alumnos datos`.`codigo_expediente` as `codigo_expediente`  from `alumnos datos`  join `expedientes` on `alumnos datos`.`codigo_expediente` = `expedientes`.`codigo_expediente` join `aspectos pedagogicos` on `alumnos datos`.`aspectos_pedagogicos` = `aspectos pedagogicos`.`codigo_pedagogicos` join `tipo escuela` on `aspectos pedagogicos`.`codigo_escuela` = `tipo escuela`.`codigo_escuela` join `rendimiento academico` on `aspectos pedagogicos`.`codigo_rendimiento` = `rendimiento academico`.`codigo_rendimiento` join `asignatura dificultad` on `aspectos pedagogicos`.`cod_asignatura_dificultad` = `asignatura dificultad`.`cod_asignatura_dificultad` join `asignatura facilidad` on `aspectos pedagogicos`.`cod_asignatura_facilidad` = `asignatura facilidad`.`cod_asignatura_facilidad` join `estudio constante` on `aspectos pedagogicos`.`codigo_estudio` = `estudio constante`.`codigo_estudio` join `consideracion estudio` on `aspectos pedagogicos`.`cod_consideracion` = `consideracion estudio`.`cod_consideracion` join `aspectos personales` on `alumnos datos`.`cod_aspectos_personal` = `aspectos personales`.`cod_aspectos_personal` join `convive` on `aspectos personales`.`codigo_convive` = `convive`.`codigo_convive` join `relaciones sociales` on `aspectos personales`.`cod_relaciones_sociales` = `relaciones sociales`.`cod_relaciones_sociales` join `relaciones amistosas` on `aspectos personales`.`cod_relaciones_amistosas` = `relaciones amistosas`.`cod_relaciones_amistosas` join `mejores_amigos` on `aspectos personales`.`cod_mejor_amigo` = `mejores_amigos`.`cod_mejor_amigo` join `actividades_deportivas` on `aspectos personales`.`cod_act_deportiva` = `actividades_deportivas`.`cod_act_deportiva` join `actividades_artisticas` on `aspectos personales`.`cod_act_artistica` = `actividades_artisticas`.`cod_act_artistica` join `problemas emocionales` on `aspectos personales`.`cod_problema_emocional` = `problemas emocionales`.`cod_problema_emocional` where `id_alumno`=?';
    var values = [req.query.id_alumno];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});





router.get('/get_alumno', (req, res, next) => {
    var query = 'select `id_alumno` as `id_alumno`, `expedientes`.`codigo_expediente` as `codigo_expediente`, `expedientes`.`fecha_expediente` as `fecha_expediente`, `nombre_alumno` as `nombre_alumno`, `segundo_nombre` as `segundo_nombre`, `apellido_alumno` as `apellido_alumno`, `segundo_apellido` as `segundo_apellido`, DATE_FORMAT(FROM_DAYS(DATEDIFF(now(),`fecha_nacimiento`)), "%Y")+0 AS Edad , `fecha_nacimiento` as `fecha_nacimiento`, `sexo` as `sexo`,`nacionalidad` as `nacionalidad`, `correo` as `correo`, `lugar_procedencia` as `lugar_procedencia`, `residencial_actual_alumno` as `residencial_actual_alumno`,`residencia_actual` as `residencia_actual`, `tel_celular` as `tel_celular`, `tel_casa` as `tel_casa`, `tel_trabajo` as `tel_trabajo`, `nombre_padre` as `nombre_padre`, `tel_padre` as `tel_padre`, `ocupacion_padre` as `ocupacion_padre`, `nombre_madre` as `nombre_madre`, `tel_madre` as `tel_madre`, `ocupacion_madre` as `ocupacion_madre`, `aspectos_pedagogicos` as `aspectos_pedagogicos`, `cod_aspectos_personal` as `cod_aspectos_personal`, `codigo_ficha` as `codigo_ficha` from `alumnos datos` join `expedientes` on `alumnos datos`.`codigo_expediente` = `expedientes`.`codigo_expediente` order by `alumnos datos`.`codigo_expediente`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});




router.put('/update_alumno', (req, res, next) => {
            var query = 'update `alumnos datos` set nombre_alumno=?,segundo_nombre=?,apellido_alumno=?,segundo_apellido=?,fecha_nacimiento=?,sexo=?,nacionalidad=?,lugar_procedencia=?,residencial_actual_alumno=?,residencia_actual=?,nombre_padre=?,tel_padre=?,ocupacion_padre=?,nombre_madre=?,tel_madre=?,ocupacion_madre=?,aspectos_pedagogicos=?,cod_aspectos_personal=?,tel_celular=?,tel_casa=?,tel_trabajo=?,correo=?,codigo_ficha=? where id_alumno=?';
            var values = [req.body.nombre_alumno,
                req.body.segundo_nombre,
                req.body.apellido_alumno,
                req.body.segundo_apellido,
                req.body.fecha_nacimiento,
                req.body.sexo,
                req.body.nacionalidad,
                req.body.lugar_procedencia,
                req.body.residencial_actual_alumno,
                req.body.residencia_actual,
                req.body.nombre_padre,
                req.body.tel_padre,
                req.body.ocupacion_padre,
                req.body.nombre_madre,
                req.body.tel_madre,
                req.body.ocupacion_madre,
                req.body.aspectos_pedagogicos,
                req.body.cod_aspectos_personal,
                req.body.tel_celular,
                req.body.tel_casa,
                req.body.tel_trabajo,
                req.body.correo,
                req.body.codigo_ficha,
                req.body.id_alumno]
            con.query(query, values, (err, result, fields) => {
                if(err) {
                    next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });

router.post('/insert_alumno', (req, res, next) => {
    var query = 'INSERT INTO `alumnos datos` (`id_alumno`, `nombre_alumno`, `segundo_nombre`, `apellido_alumno`, `segundo_apellido`,`codigo_expediente`, `fecha_nacimiento`, `sexo`, `nacionalidad`, `lugar_procedencia`,`residencial_actual_alumno`, `residencia_actual`, `nombre_padre`, `tel_padre`, `ocupacion_padre`, `nombre_madre`, `tel_madre`, `ocupacion_madre`, `aspectos_pedagogicos`, `cod_aspectos_personal`, `tel_celular`, `tel_casa`, `tel_trabajo`, `correo`, `codigo_ficha`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    var values = [req.body.id_alumno,
                req.body.nombre_alumno,
                req.body.segundo_nombre,
                req.body.apellido_alumno,
                req.body.segundo_apellido,
                req.body.codigo_expediente,
                req.body.fecha_nacimiento,
                req.body.sexo,
                req.body.nacionalidad,
                req.body.lugar_procedencia,
                req.body.residencial_actual_alumno,
                req.body.residencia_actual,
                req.body.nombre_padre,
                req.body.tel_padre,
                req.body.ocupacion_padre,
                req.body.nombre_madre,
                req.body.tel_madre,
                req.body.ocupacion_madre,
                req.body.aspectos_pedagogicos,
                req.body.cod_aspectos_personal,
                req.body.tel_celular,
                req.body.tel_casa,
                req.body.tel_trabajo,
                req.body.correo,
                req.body.codigo_ficha];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.delete('/delete_alumno', (req, res, next) => {
        var query = 'delete from `alumnos datos` where id_alumno=?';
        var values = [req.query.id_alumno];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
});

    

router.get('/get_convive', (req, res, next) => {
    var query = 'SELECT * FROM `convive`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.post('/insert_convive', (req, res, next) => {
        var query = 'insert into `convive` (descripcion) values(?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.put('/update_convive', (req, res, next) => {
        var query = 'update `convive` set `descripcion` = ? where `codigo_convive` = ?';
        var values = [req.body.descripcion,
                        req.body.codigo_convive];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_convive', (req, res, next) => {
        var query = 'delete from `convive` where codigo_convive=?';
        var values = [req.query.codigo_convive];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_alumnotranstorno', (req, res, next) => {
    var query = 'select  `alumnos_transtornos`.`codigo_detalle` as `codigo_detalle`,`alumnos datos`.`id_alumno` as `id_alumno`, `transtornos`.`descripcion` as `descripcion`  from `alumnos_transtornos`  join `expedientes` on `alumnos_transtornos`.`codigo_expediente` = `expedientes`.`codigo_expediente` join `alumnos datos` on `alumnos datos`.`codigo_expediente` = `expedientes`.`codigo_expediente`  join `transtornos` on `transtornos`.`codigo_trans` = `alumnos_transtornos`.`codigo_trans`  order by `codigo_detalle`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_alumnotranstorno', (req, res, next) => {
        var query = 'UPDATE `alumnos_transtornos` SET `codigo_expediente` = ?, `codigo_trans` = ? WHERE `codigo_detalle`= ?';
        var values = [req.body.codigo_expediente,
                        req.body.codigo_trans,
                        req.body.codigo_detalle];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_alumnotranstorno', (req, res, next) => {
        var query = 'DELETE FROM `alumnos_transtornos` WHERE `codigo_detalle` = ?';
        var values = [req.query.codigo_detalle];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });




router.post('/insert_alumnotranstorno', (req, res, next) => {
        var query = 'INSERT INTO `alumnos_transtornos` (`codigo_expediente`,`codigo_trans`) VALUES (?,?)';
        var values = [req.body.codigo_expediente,
                        req.body.codigo_trans];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });


router.get('/get_fichadocumentos', (req, res, next) => {
    var query = 'SELECT `ficha_documentos`.`codigo_detalles` as `codigo_detalles`,`alumnos datos`.`id_alumno` as `id_alumno`,`documentos`.`descrip_doc` as `descrip_doc` FROM `ficha_documentos` join `documentos` on `ficha_documentos`.`tipo_documento` = `documentos`.`tipo_documento`  join `ficha` on `ficha_documentos`.`num_ficha` = `ficha`.`num_ficha` join `alumnos datos` on `alumnos datos`.`codigo_ficha` = `ficha`.`num_ficha` order by `codigo_detalles`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.put('/update_fichadocumentos', (req, res, next) => {
        var query = 'UPDATE `ficha_documentos` SET `num_ficha` = ?, `tipo_documento` = ?  WHERE `codigo_detalles` = ?';
        var values = [req.body.num_ficha,
                        req.body.tipo_documento,
                        req.body.codigo_detalles];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });
    
router.delete('/delete_fichadocumentos', (req, res, next) => {
        var query = 'DELETE FROM `ficha_documentos` WHERE `codigo_detalles` = ?';
        var values = [req.query.codigo_detalles];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_fichadocumentos', (req, res, next) => {
        var query = 'INSERT INTO `ficha_documentos` (`num_ficha`,`tipo_documento`) VALUES (?,?)';
        var values = [req.body.num_ficha,
                        req.body.tipo_documento];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_ultimopersonal', (req, res, next) => {
    var query = 'SELECT max(`cod_aspectos_personal`) as `cod_aspectos_personal`FROM `aspectos personales`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.get('/get_ultimopedagogico', (req, res, next) => {
    var query = 'SELECT max(`codigo_pedagogicos`) as `aspectos_pedagogicos` FROM `aspectos pedagogicos`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.get('/get_ultimoexpediente', (req, res, next) => {
    var query = 'SELECT max(`codigo_expediente`) as `codigo_expediente` FROM `expedientes`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.get('/get_ultimaficha', (req, res, next) => {
    var query = 'SELECT max(`num_ficha`) as `codigo_ficha`FROM `ficha`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.post('/insert_expediente', (req, res, next) => {
    var query = 'INSERT INTO `expedientes` VALUES ()';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.get('/get_fichadocumentos2', (req, res, next) => {
    var query = 'SELECT `documentos`.`descrip_doc` as `descrip_doc` FROM `ficha_documentos` join `documentos` on `ficha_documentos`.`tipo_documento` = `documentos`.`tipo_documento` WHERE `num_ficha`=?';
    var values = [req.query.num_ficha];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.get('/get_alumnostrastornos2', (req, res, next) => {
    var query = 'select `transtornos`.`descripcion` as `descripcion`, `transtornos`.`codigo_trans` as `codigo_trans` from `alumnos_transtornos` join `expedientes` on `alumnos_transtornos`.`codigo_expediente` = `expedientes`.`codigo_expediente`join `alumnos datos` on `alumnos datos`.`codigo_expediente` = `expedientes`.`codigo_expediente` join `transtornos` on `transtornos`.`codigo_trans` = `alumnos_transtornos`.`codigo_trans` WHERE `alumnos_transtornos`.`codigo_expediente`= ? order by `alumnos_transtornos`.`codigo_expediente` , `alumnos_transtornos`.`codigo_trans`';
    var values = [req.query.codigo_expediente];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.get('/get_seguimiento', (req, res, next) => {
    var query = 'select `seguimientos`.`codigo_sesion` as `codigo_sesion`,`seguimientos`.`fecha_sesion` as `fecha_sesion`,`seguimientos`.`motivo_sesion` as `motivo_sesion`, concat_ws(" ", `usuarios`.`nombre`, `usuarios`.`apellido`) as `nombre`,concat_ws(" ",`alumnos datos`.`nombre_alumno`,`alumnos datos`.`segundo_nombre`,`alumnos datos`.`apellido_alumno`,`alumnos datos`.`segundo_apellido`) as `nombre_alumno`, `seguimientos`.`codigo_expediente` as `codigo_expediente`, `usuarios`.`codigo` as `codigo_usuario` from `seguimientos` join `usuarios` on `seguimientos`.`codigo_usuario` = `usuarios`.`codigo` join `expedientes` on `seguimientos`.`codigo_expediente` = `expedientes`.`codigo_expediente` join `alumnos datos` on `alumnos datos`.`codigo_expediente` = `expedientes`.`codigo_expediente`  order by `seguimientos`.`codigo_sesion`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_seguimiento', (req, res, next) => {
    var query = 'UPDATE `intae`.`seguimientos` SET `codigo_usuario` = ?, `codigo_expediente` = ?, `motivo_sesion` = ? WHERE `codigo_sesion` = ?';
    var values = [req.body.codigo_usuario,
                    req.body.codigo_expediente,
                    req.body.motivo_sesion,
                    req.body.codigo_sesion];
    con.query(query, values, (err, result, fields) => {
        if(err) {
           next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.delete('/delete_seguimiento', (req, res, next) => {
    var query = 'DELETE FROM `seguimientos` WHERE `codigo_sesion` = ?';
    var values = [req.query.codigo_sesion];
    con.query(query, values, (err, result, fields) => {
        if(err) {
           next(err);
        } else {
            res.status(200).json(result);
        }
    });
});




router.post('/insert_seguimiento', (req, res, next) => {
    var query = 'INSERT INTO `seguimientos` (`codigo_usuario`, `codigo_expediente`, `motivo_sesion`) VALUES (?, ?, ?)';
    var values = [req.body.codigo_usuario,
                    req.body.codigo_expediente,
                    req.body.motivo_sesion];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

module.exports = router;
